var editDataHappening = false;
var METH = -51;
var lastHeight = 46;
const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight);

function removeFixedFooter (){
    if(height > window.innerHeight){
        document.getElementById("footer").style.position = "initial";
    }
    console.log(height)
    console.log(window.innerHeight)
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
    if(editDataHappening == true && lastHeight != element.scrollHeight){
        document.querySelector('.modalEditText').style.bottom = METH + 'px';
        METH -= 12;
    }
    lastHeight = element.scrollHeight;
    removeFixedFooter();
}

window.onload = removeFixedFooter;