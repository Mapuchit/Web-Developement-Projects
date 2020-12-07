$(document).ready(() =>{

    // the hint box
    $('.hint-box').on('click', () => {
      // slide the hint into view
      $('.hint').slideToggle(500);
    });
  
    // we have three wrong answers
    // the text of the wrong answer will fade out when clicked
    // a frowny face will appear at the bottom 
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('fast');
      $('.frown').show();
    });
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut('fast');
      $('.frown').show();
    });
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut('fast');
      $('.frown').show();
    });
  
    // the right answer
    // hide the frowny face image and show the smiley face
    // the wrong answers should fade away
    $('.correct-answer').on('click', () => {
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-text-one').fadeOut('fast');
      $('.wrong-text-two').fadeOut('fast');
      $('.wrong-text-three').fadeOut('fast');
      $('.next-button').show();
    });

    // reset the quiz and make the wrong answers reappear
    // a reset helper function
    const reset = () => {
        $('.frown').hide();
        $('.smiley').hide();
        $('.wrong-text-one').show();
        $('.wrong-text-two').show();
        $('.wrong-text-three').show();
        $('.next-button').hide();
    }

    // the reset event handler
    $('.reset-button').on('click', () => {
        reset();
    });


    // use arrays to setup a quiz with multiple questions 
    const questionIDs = ['#question1', '#question2', '#question3', '#question4'];
    
    for (let i = 1; i < questionIDs.length; i++) {
        // if we are on the last question
        if (i === questionIDs.length) {
            return $('.game-over-button').show();
        }
        return  $(`#next${i}`).on('click', () => {
          // not on last question yet
          $(questionIDs[i - 1]).hide();
          $(questionIDs[i]).show();
          reset();
        });
    }


    // to play game from beginning
    $('.game-over-button').on('click', () => {
        $(questionIDs[-1]).hide();
        $('#question1').show();
        reset();
    });
  
});