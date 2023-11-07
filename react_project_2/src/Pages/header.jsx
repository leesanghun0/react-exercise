import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const navList = ['메뉴소개','매장안내','가맹안내','커뮤니티'];

    // 윈도우의 스크롤 중 현재 있는 스크롤위치에서  
    // -가도면 헤더가 생기고 
    // +되면 헤더가 없어져야됨
    // const headerElement = document.querySelector('.header');
    // let prevPageScroll = window.scrollY;
    
    
    // window.addEventListener("scroll", function() {
    //     let currentScroll = window.scrollY;
        
    //     if(prevPageScroll<currentScroll){
    //         headerElement.style.display = "none";
    //     }else if(prevPageScroll>currentScroll){
    //         headerElement.style.display = "flex";
    //     }
    //     prevPageScroll=currentScroll;
    // });


    return (<header className="header">
    <div className="header-logo">COFFEE</div>

    <nav className="nav">
     <ul className="nav-list">
         {navList.map((navItem, keyValue)=>
          <li className="nav-item" key={keyValue}><Link href="#">{navItem}</Link></li>
          )}
     </ul>
    </nav>
     
     {/* mobile-btn */}
     <span className="btn-area" role="button">
         <span className="btn-area-span"></span>
         <span className="btn-area-span"></span>
         <span className="btn-area-span"></span>
     </span>
 </header>);
}

export default Header;