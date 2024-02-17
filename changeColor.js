 //function mouseover and mouseout

 const changeColorMenuBtn = document.querySelectorAll(".linksMenu");

 changeColorMenuBtn.forEach(color => {
  color.addEventListener("mouseover", function(){
  color.style.backgroundColor = "pink";
  color.style.padding = "16px";
 });

 color.addEventListener("mouseout", function(){
 color.style.backgroundColor = "#8c15e9";
 color.style.padding = "16px";
 });

});