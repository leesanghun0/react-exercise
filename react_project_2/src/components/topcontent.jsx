import React, { useState }  from "react";
import data from "../services/data";
import styles from "../sass/content.module.scss";
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
        {/* <div className="contents-box">
            <div className="contents-box-images">
                <img className="contents-box-images-item" src={section_img1} alt="임시" />
            </div>
            <div className="contents-box-text">
                <h2 className="contents-box-title">Vestibulum non nisi quis erat aliquet pellentesque</h2>
                <p>Curabitur nec consectetur augue, id convallis nibh. Cras augue tortor, ornare vitae molestie a, mollis iaculis tellus. Quisque et ornare sapien.</p>
            </div>
        </div>

        <div className="contents-box">
            <div className="contents-box-images">
                <img className="contents-box-images-item" src={section_img2} alt="임시" />
            </div>    
            <div className="contents-box-text">
                <h2 className="contents-box-title">Ut euismod leo sit amet odio finibus maximus</h2>
                <p>Sed eleifend, erat et tincidunt elementum, massa ligula posuere magna, non gravida massa leo eu lacus.</p>
            </div>
        </div>

        <div className="contents-box">
            <div className="contents-box-images">
                <img className="contents-box-images-item" src={section_img3} alt="임시" />
            </div>
            <div className="contents-box-text">
                <h2 className="contents-box-title">Nulla et lorem auctor</h2>
                <p>Nulla vitae augue posuere, vestibulum velit vitae, fermentum sapien. Aenean sed commodo lorem, vitae porttitor nisi.</p>
            </div>
        </div> */}
    </div>
</main>);
}

function Contents(props) {
    return(<div className={styles["contents-box"]}>
    <div className={styles["contents-box-images"]}>
        <img className={styles["contents-box-images-item"]} src={props.contentsBox.images} alt="임시" />
    </div>
    <div className={styles["contents-box-text"]}>
        <h2 className={styles["contents-box-title"]}>{props.contentsBox.title}</h2>
        <p>{props.contentsBox.describe}</p>
    </div>
</div>)
}


export default Topcontent;