$(document).ready(function () {
    $('.menu-btn-toggle').click(function () {
        $('.menu-container').toggleClass('active');
        $(this).toggleClass('active');
    });
});

const $items = $('.wrapper .item-brand');
const totalItems = $items.length;
const animationDuration = 30;

$items.each(function (i) {
  const delay = (animationDuration / totalItems) * (totalItems - i) * -1;
  $(this).css('animation-delay', `${delay}s`);
});

