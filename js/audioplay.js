$("map[name=my_image] area").on('click', function () {
  var $this = $(this);
   var id = $this.attr('id').replace(/area/, '');
  
  $.each($('audio'), function () {
     this.pause();
  });
  
      $this.toggleClass('active');
      if($this.hasClass('active')){
          // Removed text as requested by Don Wiss - 27 May 2023
          //$this.text('pause');
        $('audio[id^="sound"]')[id-1].play();
      } else {
          // Removed text as requested by Don Wiss - 27 May 2023
          //$this.text('play');
        $('audio[id^="sound"]')[id-1].pause();
      }
  });