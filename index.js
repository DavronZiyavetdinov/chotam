const loaded = () => console.log(" sahifa yuklandi");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");

const toggleSidebar = () => {
if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
else sidebar.classList.add("hide");
};
const keyUp = (e) => {
  if (e.key == "Escape") sidebar.classList.add("hide")
}

//Bolimlarni shakillantirish
const sections = [
    {title:"O'QITUVCHILAR" , link:"#"},
    {title:"O'QUVCHILAR" , link:"#"},
    {title:"XODIMLAR" , link:"#"},
    {title:"FANLAR" , link:"#"},
    {title:"XONALAR" , link:"#"},
    {title:"DARS JADVALLARI" , link:"#"},
]

const setCards = () =>{
    cards.innerHTML = "";

    sections.map((section) =>{
        console.log(section);
    })
}
setCards()
