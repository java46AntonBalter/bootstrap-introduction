const root = document.getElementById('root');
const chessBoard = new ChessBoard(root, alert);
chessBoard.render(root, alert);
function alert(i, j){
    const note = document.createElement("div");
    note.classList.add("alert");
    note.classList.add("alert-warning");
    note.classList.add("alert-dismissible");
    note.classList.add("fade");
    note.classList.add("show");
    note.classList.add("g-0")
    note.classList.add("p-0")
    note.classList.add("m-0")
    note.setAttribute("role", "alert");
    const notePara = document.createElement("p");
    notePara.setAttribute("style", "font-size:2vw;")
    const noteText = document.createTextNode(`${String.fromCharCode(j)} ${i}`);
    note.appendChild(notePara);
    notePara.appendChild(noteText);
    document.getElementById(`${String.fromCharCode(j)}${i}`).appendChild(note);
    note.id = `${String.fromCharCode(j)}${i}note`
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.classList.add("btn-close");
    closeBtn.classList.add("g-0")
    closeBtn.classList.add("p-0")
    closeBtn.classList.add("m-0")
    closeBtn.setAttribute("aria-label", "Close");
    document.getElementById(`${String.fromCharCode(j)}${i}note`).appendChild(closeBtn);
    closeBtn.id = `${String.fromCharCode(j)}${i}close`;
    document.getElementById(`${String.fromCharCode(j)}${i}close`).addEventListener("click", function(event) {        
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(`${String.fromCharCode(j)}${i}note`).remove();        
        });
        
}
