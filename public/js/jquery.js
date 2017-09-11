$(document).ready(function() {
    $('.border').on('mouseenter', function() {
      $(this).find("a").removeClass('text-hide');
    });
    $('.border').on('mouseleave', function() {
      $(this).find("a").addClass('text-hide');
    });
});
  