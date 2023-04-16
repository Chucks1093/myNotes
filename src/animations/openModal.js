function openModal(info, btn){
     btn.children[1].style.display = localStorage.getItem("isChecked")? "none":"block";
     btn.addEventListener("click", ()=>{
          btn.children[1].style.display = "none";
          info.children[0].style.display = "block";
          info.children[1].style.display= "block";
          localStorage.setItem("isChecked", true);
          
          setTimeout(()=>{
               info.children[0].style.opacity = 1;
               info.children[1].style.opacity= 1;
          },50);
          
     });
     info.children[0].addEventListener("click", ()=>{
          info.children[0].style.opacity = 0;
          info.children[1].style.opacity= 0;
          
          setTimeout(()=>{
               info.children[1].style.display= "none";
               info.children[0].style.display ="none";
          }, 1000);
     });

     // info.style.opacity = 


};

export default openModal;