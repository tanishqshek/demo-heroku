$(document).ready(function(){
    $('#mycarousel').carousel({ interval:2000 });
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        } 
    });

    $('#loginModalButton').click(function(){
        $('#loginModal').modal('show');
    });

    $('#reserveModalButton').click(function(){
        $('#reserveModal').modal('show');
    });

    $('#registerModalButton').click(function(){
        $('#registerModal').modal('show');
    });

    $('#101ModalButton').click(function(){
      $('#101Modal').modal('show');
  });

$('#101Modal').on('hidden.bs.modal', function () {
  // Load up a new modal...
  $('#101signin').modal('show')
})

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#myInput2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList2 li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

    $("#famMembers").change(function() {
        if ($(this).val() == "1") {
          $('#details1').show();
          $('#details-2').hide();
          $('#details-3').hide();
        } 
        else if ($(this).val() == "2") {
            $('#details-2').show();
            $('#details1').hide();
            $('#details-3').hide();
          } 
        else if ($(this).val() == "3") {
        $('#details-3').show();
        $('#details-2').hide();
        $('#details1').hide();
        } 
        else {
          $('#details1').hide();
          $('#details-2').hide();
          $('#details-3').hide();
        //   $('#details-2').hide();
        //   $('#details-3').hide();
        }
      });

    $("#famMembers").trigger("change");
})