function handleTitleClick() {
    const clickedClassName = "active"
    // if (h1.classList.contains(clickedClassName)) {
    //     h1.classList.remove(clickedClassName)
    // } else {
    //     h1.classList.add(clickedClassName)
    // }
    h1.classList.toggle(clickedClassName);
}

const h1 = document.querySelector('div.titles:first-child h1');

h1.addEventListener("click", handleTitleClick);




