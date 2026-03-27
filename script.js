document.addEventListener('DOMContentLoaded', () = {
    console.log(Kolkata Oud page is ready.);

     تأثير بسيط عند تحريك الماوس على الأيقونة
    const instaIcon = document.querySelector('.instagram-link');
    
    instaIcon.addEventListener('mouseover', () = {
        instaIcon.style.opacity = 0.7;
    });

    instaIcon.addEventListener('mouseout', () = {
        instaIcon.style.opacity = 1;
    });
});