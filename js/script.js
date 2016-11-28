(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const $tbody = $('tbody');

  const items = [];

  $('.addItem').on('click', (event) => {
    const $target = $(event.target);
    const $cardContent = $target.parent().siblings('.card-content');
    const name = $cardContent.children('.card-title').text();
    const price = $cardContent.children('p').text();

    const $tr = $('<tr>');
    const $tdName = $('<td>');
    const $tdPrice = $('<td>').addClass('right-align');

    $tdName.append(name);
    $tdPrice.append(price);

    $tr.append($tdName);
    $tr.append($tdPrice);

    $tbody.append($tr);
  });
})();
