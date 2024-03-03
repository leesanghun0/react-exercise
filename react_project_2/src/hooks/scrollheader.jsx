const headerScroll=()=>{
    const headerElement = document.querySelector('.header');
    let prevPageScroll = window.scrollY;
    
    
    window.addEventListener("scroll", function() {
        let currentScroll = window.scrollY;
        
        if(prevPageScroll<currentScroll){
            headerElement.style.display = "none";
        }else if(prevPageScroll>currentScroll){
            headerElement.style.display = "flex";
        }
        prevPageScroll=currentScroll;
    });
}

export default headerScroll;