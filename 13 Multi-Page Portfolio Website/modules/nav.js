export function setActive(activeButtonId) {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        if(button.id === activeButtonId) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

export function renderContent(pageModule) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    pageModule.render();
}