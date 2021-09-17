const ham = document.getElementById("ham");
const navlist = document.getElementsByClassName("navitems")[0];
const close = document.getElementById("close");

ham.addEventListener("click", () => {
  navlist.classList.add("v-class-resp");

});

close.addEventListener("click",()=>{
  navlist.classList.remove("v-class-resp")
})

navlist.addEventListener('click',()=>{
  navlist.classList.remove("v-class-resp")

})