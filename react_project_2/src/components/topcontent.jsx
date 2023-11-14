import React, { useState }  from "react";
import data from "../services/data";
import styles from "../sass/content.module.scss";
import Contents from "../hooks/Contents";
// import section_img1 from "../images/sub-section-images-1.jpg";
// import section_img2 from "../images/sub-section-images-2.jpg";
// import section_img3 from "../images/sub-section-images-3.jpg";

const Topcontent = ()=>{
   
  let [contentsBox, setContentsBox] = useState(data);
//전역변수 카운터 넣고 0 ++ 
function scrollHandleEvent(){
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
window.addEventListener('scroll',scrollHandleEvent);

    return(<main className={styles["top-content"]}>
    <div className={styles["top-content-wrapper"]}>

        <Contents contentsBox={contentsBox[0]}></Contents>
        <Contents contentsBox={contentsBox[1]}></Contents>
        <Contents contentsBox={contentsBox[2]}></Contents>
       
    </div>
</main>);
}

export default Topcontent;