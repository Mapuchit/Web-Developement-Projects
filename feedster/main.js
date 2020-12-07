$(document).ready(() => {

    // make a navigation menu appear when you hover over menu, and make it disappear when you navigate away
  
    $('.menu').on('mouseenter', () => {
      $('.nav-menu').show();
    });
  
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    });
  
    // add hover functionality to the +1 button elements
  
    $('.btn').on('mouseenter', event => {
      $(event.currentTarget).addClass('.btn-hover');
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('.btn-hover');
    });
  
    // limit a User's Post to 140 Characters
    // display the remaining number of characters that a user can enter into their comment box
  
    // 1. make the <textarea> to expect typed text as soon as the page loads with the focus method
    $('.postText').focus();
  
    // 2. after each keyup event, we want to count the number of characters in the new post
    $('.postText').on('keyup', event => {
      // set post equal to the string inside the .postText element
      let post = $(event.currentTarget).val();
      // calculate the remaining
      let remaining = 140 - post.length;
      // make the '.wordcount' message turn red if the user runs out of characters
      if (remaining <= 0) {
        $('.wordcount').addClass('red');
      } else {
        $('.wordcount').removeClass('red');
      }
      // update the HTML
      $('.characters').html(remaining);
    });
  
}); 