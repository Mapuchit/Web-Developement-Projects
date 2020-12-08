$(document).ready(() => {

    // we will use the keyup event handler to update the preview text, so we don’t need a submit button
    $('#text').on('keyup', event => {
      // update the HTML with the typed text after each keyup
      let text = $(event.currentTarget).val();
      $('.preview').html(text);
    });
  
    // the change event handler will fire anytime the selected value of the '#font' menu changes
    $('#font').on('change', event => {
      // change the value of the '.preview' element’s font-family property to the current value of this menu
      let font = $(event.currentTarget).val();
      $('.preview').css('font-family', font);
    });
  
    // another change event handler, this time to the weight menu
    $('#weight').on('change', event => {
      // change the value of the '.preview' element’s weight property to the current value of this menu
      let weight = $(event.currentTarget).val();
      $('.preview').css('font-weight', weight);
    });
  
    // since the font-size input field requires text to be entered, we’ll use a keyup event handler
    $('#size').on('keyup', event => {
      // save the current value of the field
      let fontSize = $(event.currentTarget).val() + 'px';
      // change the font-size property of the preview text
      $('.preview').css('font-size', fontSize);
    });
    
});