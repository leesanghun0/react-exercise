import React from "react";
import { Link } from "react-router-dom";



const Event = ()=>{

    return(<section className="event">
    <div className="event-wapper">
        <ul className="event-list">
           <li>Aliquam eu leo efficitur,</li> 
           <li>porttitor libero id.</li> 
        </ul>
        <Link href="#" className="event-link">Sign up for free!</Link>
    </div>
</section>)
}


export default Event;