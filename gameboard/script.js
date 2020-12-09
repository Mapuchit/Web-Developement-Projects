var main = function() {

    // 1. When the <a class="more-btn"> is clicked, we want the <ul class="more-menu"> to appear
  
    // a click event handler to the <a class="more-btn"> element
    $('.more-btn').on('click', event => {
      // toggle the sibling <ul class="more-menu"> element
      $(event.currentTarget).siblings().toggle();
    });
  
    // 2. When the <li class="share"> is clicked, we want the <li class="share-menu">
  
    // a click event handler to the <li class="share"> element
    $('.share').on('click', event => {
      // toggle the corresponding <li class="share-menu"> element
      $(event.currentTarget).next().toggle();
    });
  
    // 3. When <span class="notification"> is clicked, we want the notification bell to turn yellow
  
    // a click event handler to the notification bell
    $('.notification').on('click', event => {
      // toggle the class active
      $(event.currentTarget).toggleClass('active');
    });
  
};
  
$(document).ready(main);