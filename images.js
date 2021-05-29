downloadBtn.addEventListener("click", function () {
    let link = canvas.toDataURL();
    let anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = "file.png";
    anchor.click();
    anchor.remove();
})

let imageInput = document.querySelector(".image_input");
uploadBtn.addEventListener("click", function () {
    imageInput.click();
})
imageInput.addEventListener("change", function (e) {
    let display = createTask();
    let img = document.createElement("img");
    let src = URL.createObjectURL(e.target.files[0]);
    img.src = src;
    display.appendChild(img);
})


// let stickyActive = false;
//     let initialX = null;
//     let initialY = null;
//     navBar.addEventListener("mousedown", function(e){
//         initialX = e.clientX;
//         initialY = e.clientY;
//         stickyActive = true;
//     })
//     navBar.addEventListener("mousemove", function(e){
//         if(stickyActive == true){
//             let finalX = e.clientX;
//             let finalY = e.clientX;

//             let diffX = finalX - initialX;
//             let diffY = finalY - initialY;

//             let {top, left} = stickyPad.getBoundingClientRect();

//             stickyPad.style.top =  top + diffY + "px";
//             stickyPad.style.left =  left + diffX + "px";

//             initialX = finalX;
//             initialY = finalY;
//         }
//     })
//     navBar.addEventListener("mouseup", function(e){
//         stickyActive = false;
//     })
//     navBar.addEventListener("mouseleave", function(){
//         stickyActive = false;
//     })