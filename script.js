
const pages = Object.freeze({
    HOME: 'home', 
    CS: 'cs',
    MATH: 'math',
    PHYSICS: 'physics',
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#page-content').innerHTML = getPageContent(pages.HOME);
});


function getPageContent(page){
    switch(page){
        case pages.CS:
            return document.querySelector('#cs').innerHTML;
        case pages.MATH:
            return document.querySelector('#math').innerHTML;
        case pages.PHYSICS:
            return document.querySelector('#physics').innerHTML;
        case pages.HOME:
        default:
            return document.querySelector('#home').innerHTML;
    }
}

function switchPage(page){
    document.querySelector('#page-content').innerHTML = getPageContent(page);
}
