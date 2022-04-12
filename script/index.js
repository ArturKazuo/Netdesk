function loadPageNumbers(){
    
}

function newPage(e){
    window.location.href = `index.html#${e.id}`;
}

window.onload = loadPageNumbers;