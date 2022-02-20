class ChessBoard {
    constructor(parentElem, clickFn) {
        this.parentElem = document.getElementById(parentElem);
        this.clickFn = clickFn;

    }
    render(clickFn){
        for (let i = 0; i < 10; i++) {
            const row = document.createElement("div");
            row.classList.add("row", "g-0");
            row.id = i;
            this.parentElem.appendChild(row);
            for (let j = 64; j < 74; j++) {
                const  column = document.createElement("div");
                column.classList.add("col", "g-0");
                if(((i == 0) && (j == 64)) || ((i == 9) && (j == 64)) || ((i == 0) && (j == 73)) || ((i == 9) && (j == 73))){
                    row.appendChild(column);
                } else if ((j > 64) && (j < 73) && (i > 0) && (i < 9)){                    
                    column.classList.add("ratio", "ratio-1x1", "border");
                    column.id = `${String.fromCharCode(j)}${i}`;
                    row.appendChild(column);
                    ((i+j) % 2 != 0) && column.classList.add("bg-dark");
                    document.getElementById(`${String.fromCharCode(j)}${i}`).addEventListener("click", function(event) {
                        event.preventDefault();
                        clickFn(i,j);
                        });
                } else { 
                    column.classList.add("d-flex");
                    const par = document.createElement("p");
                    let text = "";
                    if((i == 0) && (j > 64) && (j < 73)) {
                        column.classList.add("align-items-end", "justify-content-center");
                        text = document.createTextNode(`${String.fromCharCode(j)}`);
                    } else if((i == 9) && (j > 64) && (j < 73)) {
                        column.classList.add("align-items-start", "justify-content-center");
                        text = document.createTextNode(`${String.fromCharCode(j)}`);
                    } else if((j == 73) && (i > 0) && (i < 9)) {
                        column.classList.add("align-items-center", "justify-content-start");
                        text = document.createTextNode(`${i}`);
                    } else if((j == 64) && (i > 0) && (i < 9)) {
                        column.classList.add("align-items-center", "justify-content-end");
                        text = document.createTextNode(`${i}`);
                    }
                    row.appendChild(column).appendChild(par).appendChild(text);
                };                       
            }            
        }
    }
}
