const chessBoard = new ChessBoard('root', alert);
chessBoard.render(alert);
function alert(i, j){
    const note = document.createElement("div");
    note.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show", "g-0","p-0", "m-0");
    note.setAttribute("role", "alert");
    const notePara = document.createElement("p");
    notePara.setAttribute("style", "font-size:2vw;")
    const noteText = document.createTextNode(`${String.fromCharCode(j)} ${i}`);
    document.getElementById(`${String.fromCharCode(j)}${i}`).appendChild(note).appendChild(notePara).appendChild(noteText);
    note.id = `${String.fromCharCode(j)}${i}note`
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.classList.add("btn-close", "g-0", "p-0", "m-0");
    closeBtn.setAttribute("aria-label", "Close");
    document.getElementById(`${String.fromCharCode(j)}${i}note`).appendChild(closeBtn);
    closeBtn.id = `${String.fromCharCode(j)}${i}close`;
    document.getElementById(`${String.fromCharCode(j)}${i}close`).addEventListener("click", function(event) {        
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(`${String.fromCharCode(j)}${i}note`).remove();        
        });
    document.getElementById(`${String.fromCharCode(j)}${i}note`).addEventListener("click", function(event) {        
        event.preventDefault();
        event.stopPropagation();      
        });        
        
}
