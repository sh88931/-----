document.addEventListener('DOMContentLoaded', function() {
    const activities = document.querySelectorAll('.activity');
    let points = 0;

    activities.forEach(activity => {
        activity.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500);
        });
    });

    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';

    // نظام المكافآت
    function addPoints() {
        points += 1;
        document.getElementById("points").innerText = points;
    }

    // مثال عند النجاح في أي نشاط
    window.addPoints = addPoints;
});