
 var listarr =[];
 var count = 0;

 var poplist = document.getElementById("popup-container");
  var container = document.getElementById("main-container");
  
var popup = function (){
  poplist.style.display = "block";
  container.classList.add("blur");
}
var closelist = function(){
    poplist.style.display = "none";
  container.classList.remove("blur");

}


var addvalue = ()=>{
  var inputBox = document.getElementById("inputbox").value;
  var uid = Date.now();
   count++;
   if(inputBox != ""){
     const create_new_element = document.createElement("div");
     create_new_element.innerHTML =` <div class="todo-list-container" id="${Date.now()}">
     <p class="inner-text-1" id="Innertext">${inputBox}</p>
     <div class="inner-container">
     <hr class="horizontal-line">
     <div>
     <span> <i class="fa fa-plus-circle addlist" id="add-item-icon style="font-size:36px"></i></span>
     <span><i class="fas fa-trash-alt delicon" onclick="deleteitem(this)" id="del-icon" style=font-size:"36px"></i></span>
    
     </div>
     </div> `;
     
     var adddiv = document.querySelector("#div-add")
     adddiv.appendChild(create_new_element);
     checknoitemdiv();
   }
   else{
     addvalue();
   }

    
     console.log(listarr)
     poplist.style.display = "none";
     container.classList.remove("blur");
     
     }
  
   
     

// addHeading = ()=>{
 
//   var uid = Date.now()
  
//   var mainHeading = {
//     inputBox ,
//     id : Date.now()
//   }
//   listarr.push(mainHeading);
 
//   document.querySelector(".inner-text-1").setAttribute("id",uid);
//   for(let i=0;i<listarr.length;i++){
 
//       document.getElementById(mainHeading.id).innerText = inputBox;
//   }
//   console.log(listarr)
  
// }
var noItem = document.getElementById("div-container")
checknoitemdiv = ()=>{
  if(count == 0){
    noItem.style.display = "block";
  }
  else{
    noItem.style.display = "none";
  }
}

function deleteitem(currentelement){
//  var currentelement = document.getElementById("del-icon");
var currentdiv = currentelement.parentNode.parentElement.parentElement.parentElement;

 var currentid = currentdiv.getAttribute("id")
 var currentTodo = document.getElementById(currentid);
 currentTodo.remove()
 count--;

    checknoitemdiv();
  
}
  // for(let i =0;i<listarr.length;i++){
  //   if(uid = listarr[i].id){
  //     var node = document.getElementById(uid);
  //     document.removeChild(node)
  //   }
  // }
