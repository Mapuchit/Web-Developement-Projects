$(document).ready(() => {

    // add event handlers to the list componenets
    // make the drop-down menus appear when clicked on
    // and make it disappear when the mouse leaves the menu area
  
    // targeting by id
    $('#cart').on('click', () => {
      $('#cartMenu').show();
    });
    $('#account').on('click', () => {
      $('#accountMenu').show();
    });
    $('#help').on('click', () => {
      $('#helpMenu').show();
    });
  
    // targeting by class
    $('.dropdown-menu').on('mouseleave', () => {
      $('.dropdown-menu').hide();
    });
  
});