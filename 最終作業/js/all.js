$(document).ready(function () {
    $('.menu ul li').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('show').siblings().removeClass('show');
    });

    $('.arrow').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 //滑到哪
          },1500);  //花幾毫秒滑動到上面
        });

     // swiper
     const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',//預設是horizontal，可以換vertical
        loop: true,
        speed: 1000, //滑動的時間
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },

        //自動輪播
        autoplay: {
            delay: 3000,  //毫秒
        },

        effect: 'cube',
            cubeEffect: {
            slideShadows: true,
        },

        //可以用鍵盤上下鍵控制照片
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    
    });
});