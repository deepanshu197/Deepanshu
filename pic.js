const Profileimg = document.querySelector(".img");
const Profilename = document.querySelector(".bio");
const Profilebio = document.querySelector(".name");

const intputname = document.querySelector(".name-input");
const inputbio = document.querySelector(".Update-Bio");
const inputurl = document.querySelector(".Picture-URL");
const upbtn = document.querySelector(".btn");


 upbtn.addEventListener("click" , () => {
    if(intputname.value !== ""){
        Profilename.innerText = intputname.value;
    }

    if(inputbio.value !== ""){
        Profilebio.textContent = inputbio.value;
    }

    if( inputurl.value !== ""){
        Profileimg.setAttribute("src", inputurl.value);
    }

    intputname.value="";
    inputbio.value="";
    inputurl.value="";
 });

