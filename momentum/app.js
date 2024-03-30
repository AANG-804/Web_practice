function handleTitleClick() {
    console.log("text has been clicked")
}

function handleMouseEnter(){
    text.style.color = "blue"
    text.innerText = "Mouse is IN!"
    console.log("Mouse Enter~")
}

function handleMouseLeave(){
    text.style.color = "red"
    text.innerText = "Mouse is Out!"
    console.log("Mouse leaves~")
}

function handleResize() {
    document.body.style.backgroundColor = "tomato"
}

const text = document.querySelector('div.titles:first-child p');
text.addEventListener("click", handleTitleClick);
text.addEventListener("mouseenter", handleMouseEnter);
text.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResize);




