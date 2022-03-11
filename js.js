const cls = document.querySelector(".close");
const chk = document.querySelector(".checked");
const btn = document.getElementById("btn");
const news = document.querySelector(".enter")
const txt = document.getElementById("text");
const rem = document.querySelector("h2");
const reme = document.querySelector("back");


function randome(number) {
    return Math.floor(Math.random() * (number + 1));
}


console.log(colors);

btn.addEventListener("click", ()=> {
    news.classList.add("active");
})

cls.addEventListener("click", ()=> {
    news.classList.remove("active");
    txt.value = "";
})


chk.addEventListener("click", () => {
    addNote();
})


function addNote(){
    const back = document.querySelector(".back");
    let node0 = document.createElement("div");
    let node1 = document.createElement("h2");
    node0.appendChild(node1);
    node1.style.backgroundColor = colors();
    node1.style.transform = rotate();
    node1.innerText = txt.value;
    back.appendChild(node0);

    node0.addEventListener("mouseover", ()=> {
        node0.style.transform = "scale(1.1)";
        
    })
    node0.addEventListener("mouseleave", ()=> {
        node0.style.transform = "scale(1)";
        
    })
    node0.addEventListener("dblclick", ()=> {
        node0.remove();
    })
}





function colors(){
    return `${`rgba(` + randome(270)},${randome(300)},${randome(300)},${0.9}${`)`}`;
}
function rotate(){
    return `${`rotate(` + randome(10)}deg${`)`}`;
}


// `rgb(`+ random(255) +"," + random(256) + "," + random(260) `)`
console.log(randome(-10),randome(10))