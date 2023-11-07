import React, {useState} from 'react';


const Footer = ()=>{
    const [modal, setModal] = useState(false);
    return (<footer className="footer">
    <div className="footer-wapper">
        <h3 className="footer-wapper-title">Contact us</h3>
        <div className="footer-wapper-middle">
            <span>coffee@coffee.com</span> 
            <button type="button" onClick={setModal} style={{ color : "white" }}>send mail</button>
            {
                modal ?
                <>
                    <div style={{ color : "white" }}>hi</div>
                </> : ""
            }
        </div>
        <div className="footer-wapper-copyright">©coffee. All rights reserved.</div>
    </div>
    </footer>
);}

export default Footer;