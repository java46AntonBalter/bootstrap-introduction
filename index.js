const root = document.getElementById('root');
// root.innerHTML = `<ul>${getItems()}</ul>`
// function range(from, length) {
//     const res = [];
//     for (let i = 0; i < length; i++) {
//         res.push(i + from);
//     }
//     return res;
// }
// function getItems() {
//     return range(1, 200).map(i => `<li> <img src="dog3.jpg" > item ${i.toString()}</li>`).join('');
// }
let currentPage = 1;
let pages = 30;
const paginator = new Paginator(5, 'root', displayPage);
function displayPage(page) {
    if (page == 'next'){
        currentPage = currentPage + 5;
        if (currentPage > pages) {
            currentPage = 1;
        }
        paginator.show(currentPage)
    } else if(page == 'prev') {
        currentPage = currentPage - 5;
        if (currentPage < 0) {
            currentPage = 1;
        }
        paginator.show(currentPage)
    } else {
        console.log(page)
    }
    
}