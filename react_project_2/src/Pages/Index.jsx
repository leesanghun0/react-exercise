import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Banner from "./banner";
import Topcontent from "./topcontont";
import Event from "./event";
import Bottomcontent from "./bottomcontent";
import Footer from './footer'

function Index(){

    return(
        <>
        <Header></Header>
        <Banner></Banner>
        <Topcontent></Topcontent>
        <Event></Event>
        <Bottomcontent></Bottomcontent>
        <Footer></Footer>
        </>
    )
}

export default Index;