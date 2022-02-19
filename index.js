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
    note.classList.add("mx-auto")
    note.setAttribute("role", "alert");
    note.setAttribute("width", "200px");
    const notePara = document.createElement("p");
    notePara.setAttribute("style", "font-size:1.7vw;")
    const noteText = document.createTextNode(`${String.fromCharCode(j)} ${i}`);
    note.appendChild(notePara);
    notePara.appendChild(noteText);
    document.getElementById(`${String.fromCharCode(j)}${i}`).appendChild(note);
    note.id = `${String.fromCharCode(j)}${i}note`
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.classList.add("btn-close");
    closeBtn.setAttribute("aria-label", "Close");
    document.getElementById(`${String.fromCharCode(j)}${i}note`).appendChild(closeBtn);
    closeBtn.id = `${String.fromCharCode(j)}${i}close`;
    document.getElementById(`${String.fromCharCode(j)}${i}close`).addEventListener("click", function(event) {        
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(`${String.fromCharCode(j)}${i}note`).remove();
        });
        
}
