$(document).ready(function(){
  $("form#stuff").submit(function(event){
    event.preventDefault();

    var value = $("input#item1").val();
    $(".result").append("<tr><td><i class='fa fa-2x fa-trash' aria-hidden='true'></i>"+" "+value+"<td></tr>");

    $(".result").show();

    $("input#item1").val("");

    $(".fa-trash").click(function(){
      $(this).parent().parent().fadeOut(500, function(){
        $(this).remove();
      });
      event.stopPropagation();
    });

  });

});
