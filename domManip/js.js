const content = document.querySelector(".content");
const p_1 = document.createElement("p");
p_1.style.color = "red";
p_1.textContent = "Hey I'm red";


const blue3 = document.createElement("h3");
blue3.style.color = "blue";
blue3.textContent = "I'm a blue h3!";

const blackDiv = document.createElement("div");
blackDiv.style.borderColor = "black";
blackDiv.onmouseover = () => blackDiv.style.fontSize = "1.2rem";
blackDiv.onmouseout = () => blackDiv.style.fontSize = "1rem";

const h_1 = document.createElement("h1");
h_1.textContent = "I'm in a div"; 

const p_2 = document.createElement("p");
p_2.textContent = "Me too!";

blackDiv.appendChild(h_1);
blackDiv.appendChild(p_2);


content.appendChild(p_1);
content.appendChild(blue3);
content.appendChild(blackDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e  .target.style.background = "blue";
});


