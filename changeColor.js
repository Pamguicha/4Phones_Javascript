 //function mouseover and mouseout links menu bar

 const changeColorMenuBtn = document.querySelectorAll(".linksMenu");

 changeColorMenuBtn.forEach(color => {
  color.addEventListener("mouseover", function(){
  color.style.backgroundColor = "#00d0b7";
  color.style.padding = "16px";
 });

 color.addEventListener("mouseout", function(){
 color.style.backgroundColor = "#8c15e9";
 color.style.padding = "16px";
 });

});

//function mouseover and mouseout title images 

const changeLinksTitlesImages = document.querySelectorAll(".titleHomeProduct");

changeLinksTitlesImages.forEach(link => {
  link.addEventListener("mouseover", function(){
  link.style.color = "#00d0b7";
  });

  link.addEventListener("mouseout", function(){
  link.style.color = "#8c15e9";
  });

});

//function mouseover and mouseout button checkoy

const changeColorCheckoutBtn = document.querySelector(".checkout");

changeColorCheckoutBtn.addEventListener("mouseover", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#8c15e9";
});

changeColorCheckoutBtn.addEventListener("mouseout", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#00d0b7";
});

//function btn register & clear form mouseover and mouseout
const changeSubmitColor = document.querySelector(".submitRegisterBtn");

changeSubmitColor.addEventListener("mouseover", function(){
 changeSubmitColor.style.backgroundColor = "#00d0b7";
});

changeSubmitColor.addEventListener("mouseout", function(){
  changeSubmitColor.style.backgroundColor = "#8c15e9";
});

const changeResetRf = document.querySelector("#resetBtnRf");
changeResetRf.addEventListener("mouseover", function(){
  changeResetRf.style.backgroundColor = "#8c15e9";
});

changeResetRf.addEventListener("mouseout", function(){
  changeResetRf.style.backgroundColor = "#00d0b7";
});


