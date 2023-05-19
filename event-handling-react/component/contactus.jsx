import FooterContainer from "./footer";
function PageDetails(){
    return(
        <>
        <div className="contact-container-main-container1">
                    <div className="contact-title">
                        Contact <span> us </span>
                    </div>
                    <div className="contact-details-container1">
                        <div className="contact-details-container1-subcontainer1">
                            <p className="contact-details-paragraph1">
                            As Times go by in your life, it becomes more precious. So , Make every moment
                            mindful, meaningful and memorable and The most memorable moments in life are the
                            ones you have never planned.
                            </p>
                            <p className="contact-details-paragraph2">
                                ...BECAUSE WE WILL BE THERE TO PLAN THEM FOR YOU !!
                            </p>
                            <p className="contact-details-paragraph3">
                                Drop Us a Line
                            </p>
                            <input className="input1" type="address" placeholder="message" />
                            <input className="input2" type="text" placeholder="Your Name" />
                            <input className="input3" type="email" placeholder="Your Email" />
                            <button className="contact-button"> send </button>
                        </div>
                        <div className="contact-details-container1-subcontainer2">
                            <p className="address"> Address </p>
                            <p className="address1">Royal Events</p>
                            <p className="address2">
                            Somawarpet, <br />
                            Kodagu, Karnataka
                            </p>
                            <p className="address3">
                                get in touch
                            </p>
                            <p className="address4">
                            Dilhuda: +91 90333 36811 <br />
                            Likith: +91 96870 00004 <br />
                            Maria: +8965274896 <br />
                            E-mail: info@royalevents.in
                            </p>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default function Contactus(){
    return(
        <>
            <PageDetails />
            <FooterContainer />
        </>
    );
}