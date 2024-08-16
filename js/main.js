$(document).ready(function(){

   $('.small-images img').click(function(){
       var image = $(this).attr('src');
       $('.big-image img').attr('src', image);
   });

   $('#zoom').imagezoomsl();

});