import React from "react";
import product from "../images/product.jpg";

const Bottomcontent = ()=>{
    return(<section className="bottom-content">
    <div className="bottom-content-wrapper">
        <div className="bottom-content-title">
            <h2>Lorem lpsum</h2>
            <p>phasellus porttitor quis dolor ac commodo. Donec in vulputate turpis</p>
        </div>
        <div className="contents-box">
            <div className="contents-box-images">
                <img className="contents-box-images-item" src={product} alt="임시" />
            </div>
            <div className="contents-box-text">
                <h2 className="contents-box-title">Vestibulum non nisi quis erat aliquet pellentesque</h2>
                <ol className="contents-box-orderlist">
                    <li>Curabitur nec consectetur augue</li>
                    <li>id convallis nibh. Cras augue tortor, ornare vitae molestie a, mollis iaculis tellus.</li>
                    <li>Quisque et ornare sapien.</li>  
                </ol>
            </div>
        </div>
    </div>
</section>);
}



export default Bottomcontent;