const burger = document.querySelector("#burger")
const menu = document.querySelector("nav")
let flag = false
burger.addEventListener("click", ()=>{
    if(!flag)
    {
        burger.classList.add("opened")
        menu.style.display = "block"
        flag = true;
    }
    else
    {
        burger.classList.remove("opened")
        menu.style.display = "none"
        flag = false;
    }

})