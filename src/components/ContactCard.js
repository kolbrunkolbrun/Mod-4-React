import React from "react";

//Props inject the info into the component from App.js. It's placed there inside {}
function ContactCard(Props) {
    return (
        <div className="contact-card">

            <img src={Props.contact.imgUrl}/>
            <h3>{Props.contact.name}</h3>
            <p>Phone: {Props.contact.phone}</p>
            <p>Email: {Props.contact.email}</p>
        </div>
    )
}
export default ContactCard