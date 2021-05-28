function task(){
    let stickyPad = document.createElement("div");
    stickyPad.setAttribute("class", "sticky_notes");
    stickyPad.innerHTML = `
    <div class="navBar">
        <div class="minimise nIcon">
            <i class="fas fa-window-minimize"></i>
        </div>
        <div class="delete nIcon">
            <i class="fas fa-times"></i>
        </div>
    </div>
    <div class="mainArea" contenteditable = "true">
    
    </div>`
    canvasArea.appendChild(stickyPad)

    let mainArea = document.querySelector(".mainArea");
    let minimise = document.querySelector(".minimise");
    minimise.addEventListener("click",function(){
        let isActive = minimise.classList.contains("activeNIcon")
        if(!isActive){
            minimise.classList.add("activeNIcon");
            stickyPad.style.boxShadow = "none"
            // mainArea.style.display = "none";
            mainArea.classList.add("activeMini")
            // mainArea.remove();
        }
        else{
            minimise.classList.remove("activeNIcon");
            // mainArea.style.opacity = "1";
            mainArea.classList.remove("activeMini");
            // mainArea.style.display = "block";
        }
    });

    let deleteNote = document.querySelector(".delete");
    deleteNote.addEventListener("click",function(){
        stickyPad.remove();
    })

    return mainArea;
}

notesBtn.addEventListener("click", task)