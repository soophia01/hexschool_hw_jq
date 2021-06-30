$(document).ready(function () {
    $('.menu ul li').click(function (e) { 
        e.preventDefault();

        $(this).toggleClass('show').siblings().removeClass('show');
        
    });
});