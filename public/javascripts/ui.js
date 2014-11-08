$(function() {
var $search = $('.search'),
    $toggle = $search.find('.search-toggle'),
    $form = $search.find('form');

$toggle.on('click', function(e){
   e.preventDefault();
   $search.toggleClass('open').find('input').focus();
});

});