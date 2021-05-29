drawing("black", value);
// pencil
pencilBtn.addEventListener("click", function () {
    let isActive = pencilBtn.classList.contains("active_tool");
    if (!isActive) {
        eraserBtn.classList.remove("active_tool")
        dropdownEraser.style.left = -30 + "vh";
        
        pencilBtn.classList.add("active_tool")
        dropdown.style.left = 0;
        activeTool = "pencil";
    }
    else {
        pencilBtn.classList.remove("active_tool")
        dropdown.style.left = -30 + "vh";
    }
})
 
// selecting color
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", function () {
        color.forEach((col) => {
            col.classList.remove("active_color");
        })
        color[i].classList.add("active_color");
        current_color = color[i].classList[0];
        drawing(current_color, value);
    })
}

//pencil slider
pSlider.addEventListener("change", function () {
    value = pSlider.value;
    drawing(color, value);
})

//eraser
eraserBtn.addEventListener("click", function () {
    let isActive = eraserBtn.classList.contains("active_tool");
    if (!isActive) {
        pencilBtn.classList.remove("active_tool")
        dropdown.style.left = -30 + "vh";

        eraserBtn.classList.add("active_tool");
        dropdownEraser.style.left = 0;
        activeTool = "eraser";
    }
    else {
        eraserBtn.classList.remove("active_tool")
        dropdownEraser.style.left = -30 + "vh";
        activeTool = "pencil";
    }
})

//eraser slider
eSlider.addEventListener("change", function () {
    value = eSlider.value;
    drawing(color, value);
})
