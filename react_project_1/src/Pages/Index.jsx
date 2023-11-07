import React from "react";


function Index(){
    const linkArr=['Link1','Link2','Link3','Link4','Link5','Link6']

    return (
        <>
       <header className="header">
            <div className="header-menu">MENU</div>
            <div className="header-title">TEXT LOGO</div>
            <div className="header-document">DOCS</div>
       </header>
       <nav className="nav">
            <ul className="link-nav">
            {linkArr.map((x, y)=>(
                <li key={y}>{x}</li>
            ))}
            </ul>
       </nav>
       <section className="main">
            <div className="main-card"></div>
            <ul className="main-textarea">
                <li>
                    <h3>Lorem ipsum dolor sit</h3>
                </li>
                <li>Lorem, ipsum dolor sit amet</li>
                <li>consectetur adipisicing elit</li>
            </ul>
       </section>
       <nav className="sub-nav">
            <ul className="link-nav">
                <li>SUB</li>
                <li>SUB</li>
                <li>SUB</li>
                <li>SUB</li>
                <li>SUB</li>
                <li>SUB</li>
            </ul>
       </nav>
       <section className="container">
            <div className="container-item">
                <span className="blind"></span>
            </div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
            <div className="container-item"></div>
       </section>
       <footer className="footer">
            <ul className="footer-list">
                <li><span>addr.</span>Lorem ipsum sit</li>
                <li><span>phone.</span>00.000.0000</li>
                <li><span>email.</span>name@email.addr</li>
                <li><span>fax.</span>00.0000.0000</li>
            </ul>
       </footer>
        </>
    )
}

export default Index;