$(document).ready(function(){
  $("div.part1_pic").click(function(){
    $("img.part1_note").slideToggle();
  });

  $("div.part2_pic1").click(function(){
    $("img.part2_note1").slideToggle();
  });
  $("div.part2_pic2").click(function(){
    $("img.part2_note2").slideToggle();
  });
  $("div.part2_pic3").click(function(){
    $("img.part2_note3").slideToggle();
  });

  $("div.part3_pic1").click(function(){
    $("img.part3_note1").slideToggle();
  });
  $("div.part3_pic2").click(function(){
    $("img.part3_note2").slideToggle();
  });
  $("div.part3_pic3").click(function(){
    $("img.part3_note3").slideToggle();
  });
});