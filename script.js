
const pages = Object.freeze({
    HOME: 'home', 
    CS: 'cs',
    MATH: 'math',
    PHYSICS: 'physics',
    ABOUT: 'about'
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#page-content').innerHTML = getPageContent(pages.CS);
});


function getPageContent(page){
    switch(page){
        case pages.CS:
            return document.querySelector('#cs').innerHTML;
        case pages.MATH:
            return document.querySelector('#math').innerHTML;
        case pages.PHYSICS:
            return document.querySelector('#physics').innerHTML;
        case pages.ABOUT:
            return document.querySelector('#about').innerHTML;
        case pages.HOME:
        default:
            return document.querySelector('#cs').innerHTML;
    }
}

function switchPage(page){
    document.querySelector('#page-content').innerHTML = getPageContent(page);
}

function scheduleLink(){
    window.open("https://calendly.com/sunkam-sai/1-hour-personal-tutoring", "_blank");
}
