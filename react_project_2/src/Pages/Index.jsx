import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Topcontent from "../components/topcontent";
import Event from "../components/event";
import Bottomcontent from "../components/bottomcontent";
import Footer from '../components/footer'

function Index(){

    return(
        <>
        <Header></Header>
        <Banner></Banner>
        <Topcontent></Topcontent>
        <Event></Event>
        <Bottomcontent></Bottomcontent>
        <Footer/>
        </>
    )
}

export default Index;