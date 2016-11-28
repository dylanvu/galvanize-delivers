(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const $tbody = $('tbody');
  const items = [];

  const renderOrder = function() {
    $tbody.empty();
    let $tr;
    let $tdName;
    let $tdPrice;
    let subtotal = 0;
    let tax;
    let total;

    for (const item of items) {
      $tr = $('<tr>');
      $tdName = $('<td>').append(item.name);
      $tdPrice = $('<td>').append(`$${item.price}`);
      $tdPrice.addClass('right-align');

      $tr.append($tdName);
      $tr.append($tdPrice);

      $tbody.append($tr);

      subtotal += item.price;
    }
    tax = subtotal * 0.095;
    total = subtotal + tax;

    $('#subtotal').text(`$${subtotal.toFixed(2)}`);
    $('#tax').text(`$${tax.toFixed(2)}`);
    $('#total').text(`$${total.toFixed(2)}`);

  }

  $('.addItem').on('click', (event) => {
    const $target = $(event.target);
    const $cardContent = $target.parent().siblings('.card-content');
    const name = $cardContent.children('.card-title').text();
    const price = parseFloat($cardContent.children('p').text().slice(1));

    const item = {};
    item.name = name;
    item.price = price;
    items.push(item);
    console.log(items);

    renderOrder();
  });
})();
