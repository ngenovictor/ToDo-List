//This is a to-do list where a user inputs an item then the inputted value is put in a list.
//In order to delete the task listed just click on the checkbox

//business logic
var listOfItems = [];
var added = function addItem(toDo) {

 var item = $("ul.todo").append("<li class='item clickable'>" + toDo +"<input id='check' type='checkbox'></li>");


 listOfItems.push(toDo);

}


function removeItem(toDo){
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $("li").click("input[type='checkbox']",function () {
        $(this).remove();
      })

   }
    else if($(this).is(":not(:checked)")){
      alert("Checkbox is unchecked.");
    }
  });


}





//user logic
$(document).ready(function(){
  $(document).submit(function(event) {
    event.preventDefault();

   var inputItem = $("#item1").val();
    console.log(inputItem);
    $("form")[0].reset();

   added(inputItem);
    removeItem(inputItem);
  })
});
