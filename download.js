downloadBtn.addEventListener("click", function () {
    let link = canvas.toDataURL();
    let anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = "file.png";
    anchor.click();
    anchor.remove();
})

let imageInput = document.querySelector(".image_input");
uploadBtn.addEventListener("click", function(){
    imageInput.click();
    imageInput.addEventListener("change", function(e){
        let mainArea = task();
        let img = document.createElement("img");
        let src = URL.createObjectURL(e.target.files[0]);
        img.src = src;
        mainArea.appendChild(img); 
    })
})