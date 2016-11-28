(function() {
  'use strict';

  $(".button-collapse").sideNav();

  const items = [];
  let subtotal = 0;
  let tax;
  let total;

  $('.addItem').on('click', (event) => {
    $('tbody').empty();

    const $target = $(event.target);
    const $cardContent = $target.parent().siblings('.card-content');
    const name = $cardContent.children('.card-title').text();
    const price = parseFloat($cardContent.children('p').text().slice(1));

    const item = {};
    item.name = name;
    item.price = price;
    items.push(item);

    let $tr;
    let $tdName;
    let $tdPrice;
    for (const item of items) {
      $tr = $('<tr>');
      $tdName = $('<td>').text(item.name);
      $tdPrice = $('<td>').text(`$${item.price.toFixed(2)}`);
      $tdPrice.addClass('right-align');

      $tr.append($tdName);
      $tr.append($tdPrice);
      $('tbody').append($tr);

      subtotal += item.price;
    }
    tax = subtotal * 0.095;
    total = subtotal + tax;

    $('#subtotal').text(`$${subtotal.toFixed(2)}`);
    $('#tax').text(`$${tax.toFixed(2)}`);
    $('#total').text(`$${total.toFixed(2)}`);
  });

  $('#placeOrder').on('click', () => {
    if (items.length === 0) {
      Materialize.toast('There are no items in your order, please add an item.', 4000);
      return;
    }
    if ($('#firstName').val() === '') {
      Materialize.toast('Please add your first name.', 4000);
      return;
    }
    if ($('#lastName').val() === '') {
      Materialize.toast('Please add your last name.', 4000);
      return;
    }
    if ($('#phone').val() === '') {
      Materialize.toast('Please add your phone number.', 4000);
      return;
    }
    if ($('#email').val() === '') {
      Materialize.toast('Please add your email.', 4000);
      return;
    }
    if ($('#address').val() === '') {
      Materialize.toast('Please add the address you want to ship this order to.', 4000);
      return;
    }
    Materialize.toast('Your order has been placed. Thank you!', 4000);
  });
})();
