// canvas.addEventListener
undoBtn.addEventListener("mousedown", function(){
    // used set interval for the continuous flow 
    interval = setInterval(function(){     // returns an interval id which will be usefull for clearing when stoped
        if(undoArr.length > 0){
            redoArr.push(undoArr.pop());
            redraw();
        }
        else{
            clearInterval();
        }
    },60);
})

undoBtn.addEventListener("mouseup", function(){
    clearInterval(interval);
})

redoBtn.addEventListener("mousedown", function(){
    interval = setInterval(function(){
        if(redoArr.length > 0){
            undoArr.push(redoArr.pop());
            redraw();
        }else{
            clearInterval(interval);
        }
    },60);
}) 

redoBtn.addEventListener("mouseup", function(){
    clearInterval(interval);
})

zoomInBtn.addEventListener("click", function(){
    if(zoomLevel < 3){
        zoomLevel += 0.2;
        // tool.scale(zoomLevel,zoomLevel)
        // redraw();
        canvas.style.transform = `scale(${zoomLevel})`
    }
})

zoomOutBtn.addEventListener("click", function(){
    if(zoomLevel > 0.5){
        zoomLevel -= 0.2;
        canvas.style.transform = `scale(${zoomLevel})`
    }
})

//re-drawing after the undo and redo event
function redraw(){
    tool.clearRect(0, 0, canvas.width, canvas.height); // clearing the whole area first
    for(let i = 0; i < undoArr.length; i++){
        let {x, y, color, value, event} = undoArr[i];
        tool.strokeStyle = color;
        tool.lineWidth = value;
        if(event == "mousedown"){
            tool.beginPath();
            tool.moveTo(x,y);
        }else{
            tool.lineTo(x,y);
            tool.stroke();
        }
    }
}