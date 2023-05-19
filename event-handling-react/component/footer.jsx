import {Phone, GeoAltFill, Envelope} from 'react-bootstrap-icons';

export default function FooterContainer(){
    return(
        <>
            <div className="contact-container">
                <div className="contact-container-main-container2">

                    <div className="contact-container-main-container2-details1">
                        GET IN <span>TOUCH </span>
                    </div>
                    <div className="contact-container-main-container2-details2">
                        <div className="class1">
                            <p className="detials1"> Celebrate Your Special Day Here...</p>
                            <button className="button-details1"> Book Your Event</button>
                        </div>
                        <div className="class2">
                            <Phone /> +91 90333 36811 <br />

                            <GeoAltFill /> Somawarpet, Kodagu, Karnataka <br />

                            <Envelope /> info@royalevents.in <br />
                        </div>
                    </div>
                    <div className="footer">
                        Royal Events, Coorg, Karnataka
                    </div>
                </div>
            </div>
        </>
    );
}