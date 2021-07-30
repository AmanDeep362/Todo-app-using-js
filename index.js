
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
    var listvalue = document.getElementById("inputbox").value;
     const create_new_element = document.createElement("div");
     create_new_element.innerHTML =` <div class="todo-list-container">
     <p class="inner-text-1 id="">listvalue</p>
     <div class="inner-container">
     <hr class="horizontal-line">
     <div>
     <span> <i class="fa fa-plus-circle addlist" id="add-item-icon style="font-size:36px"></i></span>
     <span><i class="fas fa-trash-alt delicon" id="del-icon style=font-size:36px"></i></span>
    
     </div>
     </div> `;
   let uid = Date.now();
     
     var adddiv = document.getElementById("div-add");
      adddiv.appendChild(create_new_element);
     poplist.style.display = "none";
     container.classList.remove("blur");
     document.querySelector(".inner-text-1").setAttribute("id",uid) ; 
     listarr.pop(uid);
    var para = document.getElementById(uid);
    para.innerHTML = listvalue;
}