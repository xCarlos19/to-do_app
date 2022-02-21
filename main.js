"use strict";


window.onload(()=>{
    let main = document.getElementById("main");

});

function newTask(){

    main.innerHTML = "";
    
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "New task";

    div.appendChild(title);
    main.appendChild(div);

    

}