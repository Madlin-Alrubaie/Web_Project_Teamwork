document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 1. فلترة الكورسات
    // ==============================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const courseCards = document.querySelectorAll(".course-card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // معرفة التصنيف المطلوب
            const category = button.getAttribute("data-filter");

            // إزالة التفعيل من جميع الأزرار
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active-filter");
            });

            // تفعيل الزر الذي تم الضغط عليه
            button.classList.add("active-filter");

            // إظهار الكورسات المناسبة وإخفاء البقية
            courseCards.forEach(function (card) {

                const cardCategory = card.getAttribute("data-category");

                if (cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    // ==============================
    // 2. التحقق من نموذج الطلب
    // ==============================

    const requestForm = document.querySelector(".request-form");

    if (requestForm) {

        requestForm.addEventListener("submit", function (event) {

            // منع إرسال النموذج بالطريقة العادية
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const account = document.getElementById("account").value.trim();
            const service = document.getElementById("service").value;
            const description = document.getElementById("description").value.trim();
            const colors = document.getElementById("colors").value;
            const age = document.getElementById("age").value;
            const websiteType = document.getElementById("website-type").value;


            // التأكد من تعبئة الحقول
            if (
                name === "" ||
                account === "" ||
                service === "" ||
                description === "" ||
                colors === "" ||
                age === "" ||
                websiteType === ""
            ) {

                alert("يرجى تعبئة جميع الحقول المطلوبة.");
                return;

            }


            // رسالة النجاح
            alert(
                "تم إرسال طلبك بنجاح 🌸\n\n" +
                "شكرًا لكِ " + name +
                "\nسنتواصل معكِ عبر: " + account
            );


            // تفريغ النموذج
            requestForm.reset();

        });

    }


    // ==============================
    // 3. زر العودة إلى أعلى الصفحة
    // ==============================

    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.id = "top-button";

    topButton.setAttribute(
        "aria-label",
        "العودة إلى أعلى الصفحة"
    );

    document.body.appendChild(topButton);


    // إظهار الزر عند النزول في الصفحة
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }

    });


    // العودة إلى أعلى الصفحة
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});