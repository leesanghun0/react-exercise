
function scrollEvent(){
    let contentsText = document.querySelectorAll('.contents-box-text');
    console.log(contentsText)

    for(let i=0; i<contentsText.length; i++){
        let currentPosition = window.scrollY; //327
        let eventTargetElement = contentsText[i].getBoundingClientRect().top;//469

        if(currentPosition >= eventTargetElement){
            contentsText[i].style.transform = 'translateY(0px)';
            contentsText[i].style.transition =  'all 1s';
            contentsText[i].style.opacity =  '1';
        }
    }
}
window.addEventListener('scroll',scrollEvent);

export default scrollEvent;
