const burger = document.querySelector("#burger")
const menu = document.querySelector("nav")
const obrazy = document.querySelectorAll(".obraz")


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

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 900)
        menu.style.display = "block"
    else
    {
        menu.style.display = "none"
        burger.classList.remove("opened")
        flag = false;
    }
})


function viewImage(path)
{
    const obraz = document.createElement("img")
    obraz.src = path
    obraz.classList.add("zoom");
    obraz.addEventListener("click", function ()
    {
        this.remove()
        document.body.style.overflow = "visible"
    })
    document.body.appendChild(obraz)
    document.body.style.overflow = "hidden"
}

obrazy[0].addEventListener("click", ()=>viewImage("img/obraz1.jpg"))
obrazy[1].addEventListener("click", ()=>viewImage("img/obraz2.jpg"))
obrazy[2].addEventListener("click", ()=>viewImage("img/obraz3.jpg"))
obrazy[3].addEventListener("click", ()=>viewImage("img/obraz4.jpg"))
obrazy[4].addEventListener("click", ()=>viewImage("img/obraz5.jpg"))