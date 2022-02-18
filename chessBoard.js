
class ChessBoard {
    constructor(parentElem, clickFn) {
        this.parentElem = document.getElementById(parentElem);
        const board = this.parentElem;
        const alert = this.clickFn;
    }
    render(board, alert){
        for (let i = 0; i < 10; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("g-0");
            row.id = i;
            board.appendChild(row);
            for (let j = 64; j < 74; j++) {
                const  column = document.createElement("div");
                column.classList.add("col");
                if(((i == 0) && (j == 64)) || ((i == 9) && (j == 64)) || ((i == 0) && (j == 73)) || ((i == 9) && (j == 73))){
                    row.appendChild(column);
                } else if((i == 0) && (j > 64) && (j < 73)) {
                    column.classList.add("d-flex");
                    column.classList.add("align-items-end");
                    column.classList.add("justify-content-center");
                    const par = document.createElement("p");
                    const text = document.createTextNode(`${String.fromCharCode(j)}`);
                    par.appendChild(text);
                    column.appendChild(par);
                    row.appendChild(column);
                } else if((i == 9) && (j > 64) && (j < 73)){
                    column.classList.add("d-flex");
                    column.classList.add("align-items-start");
                    column.classList.add("justify-content-center");
                    const par = document.createElement("p");
                    const text = document.createTextNode(`${String.fromCharCode(j)}`);
                    par.appendChild(text);
                    column.appendChild(par);
                    row.appendChild(column);
                } else if((j == 73) && (i > 0) && (i < 9)) {
                    column.classList.add("d-flex");
                    column.classList.add("align-items-center");
                    column.classList.add("justify-content-start");
                    const par = document.createElement("p");
                    const text = document.createTextNode(`${i}`);
                    par.appendChild(text);
                    column.appendChild(par);
                    row.appendChild(column);
                } else if((j == 64) && (i > 0) && (i < 9)) {
                    column.classList.add("d-flex");
                    column.classList.add("align-items-center");
                    column.classList.add("justify-content-end");
                    const par = document.createElement("p");
                    const text = document.createTextNode(`${i}`);
                    par.appendChild(text);
                    column.appendChild(par);
                    row.appendChild(column);
                } else {                    
                    column.classList.add("ratio");
                    column.classList.add("ratio-1x1");
                    column.classList.add("border");
                    column.id = `${String.fromCharCode(j)}${i}`;
                    row.appendChild(column);
                    document.getElementById(`${String.fromCharCode(j)}${i}`).addEventListener("click", function(event) {
                        event.preventDefault();
                        alert(i,j);
                        });
                    ((i+j) % 2 != 0) && column.classList.add("bg-dark");
                }    
            }            
        }
    }
}
