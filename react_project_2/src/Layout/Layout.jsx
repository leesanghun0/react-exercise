import React from "react";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <Outlet />
        </>
    )
}

export default Layout;



//_variable.scss 최상단에 올라가는 것이 좋음<수정 완료>
//import파일에는 import만 하는 게 좋음. <수정 완료>
//각 섹션별로 컴포넌트를 분리하여 index.jsx에 내용 줄임<수정완료>

//const  window.scrollY  
//span으로 버튼을 만들때 role="button" 을 넣는게좋음 <수정 완료>
//section태그 헤딩태그<h1~5> 필수로 넣어야됨.
//outlet >렌더링 변경해주는 역할  //header/ outlet/ footer
//Layout 에 구조를 잡아주는역할 ex>헤더 푸터 임포트 여따함.
//텍스트 이벤트넣고 리팩토링 모듈scss 




