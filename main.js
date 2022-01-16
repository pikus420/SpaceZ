const burger = document.querySelector("#burger")
let flag = false
burger.addEventListener("click", ()=>{
    if(!flag)
    {
        burger.classList.add("opened")
        flag = true;
    }
    else
    {
        burger.classList.remove("opened")
        flag = false;
    }

})