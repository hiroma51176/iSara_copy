$(function(){
    $('.js-menu-item-link').each(function(){
        $(this).on('click', function(){
            $("+.n19w-submenu", this).slideToggle();
            $(this).toggleClass('open');
            return false;
        });
    });
});
