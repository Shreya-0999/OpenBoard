shapeBtn.addEventListener("click", function () {
    let isActive = shapeBtn.classList.contains("active_tool");
    if (!isActive) {
        shapeBtn.classList.add("active_tool")
        dropdownShape.style.left = 0;
        canvasArea.addEventListener("click", addEvent)
    }
    else {
        shapeBtn.classList.remove("active_tool");
        dropdownShape.style.left = -30 + "vh";
        canvasArea.removeEventListener("click", addEvent)
    }
})

for(let i = 0; i < shapetype.length; i++){
    shapetype[i].addEventListener("click",function(){
        shapetype.forEach((type)=>{
            type.classList.remove("active_shape");
        })
        type = shapetype[i].classList[0];
        shapetype[i].classList.add("active_shape");
    })
}

for (let i = 0; i < shapeColor.length; i++) {
    shapeColor[i].addEventListener("click", function (e) {
        activeShapeColor = shapeColor[i].classList[0];
    })
}

function addEvent(e) {
    let x = e.clientX;
    let y = e.clientY;
    y = getCoordinate(y)
    tool.beginPath();
    tool.strokeStyle = activeShapeColor;
    if(type == "square"){
        tool.rect(x, y, 200, 200);
        tool.stroke();
    }
    else if(type == "circle"){
        tool.arc(x, y, 100, 0, 2 * Math.PI);
        tool.stroke();
    }
    else if(type == "fillcircle"){
        tool.fillStyle = activeShapeColor;
        tool.arc(x, y, 100, 0, 2 * Math.PI);
        tool.fill();
    }
    else if(type == "fillsquare"){
        tool.fillStyle = activeShapeColor;
        tool.rect(x, y, 200, 200);
        tool.fill();
    }
}