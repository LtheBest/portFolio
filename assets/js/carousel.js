$(document).ready(function() {
    let $carousel = $('.carousel');
    let $items = $('.carousel-item');

    function duplicateItems() {
        $items.clone().appendTo($carousel);
    }

    duplicateItems();
});