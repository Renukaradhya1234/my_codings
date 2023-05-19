import Footerpage from "./footer";

function Aboutdetailsperson(){
    return(
        <div className="about-details-persons">
            <h1> Meet our team</h1>
            <div className="about-details-persons-container">
                <div className="about-details-persons-ind">
                    <img src="./images/mp.jpg" alt="person1" width="100%" />
                    <p> PATEL, CEO </p>
                </div>

                <div className="about-details-persons-ind">
                    <img src="./images/mp.jpg" alt="person2" width="100%" />
                    <p> MOHIT PATEL, Director</p>
                </div>

                <div className="about-details-persons-ind">
                    <img src="./images/mp.jpg" alt="person3" width="100%" />
                    <p>DRASHTI, Staff</p>
                </div>

                <div className="about-details-persons-ind">
                    <img src="./images/mp.jpg" alt="person4" width="100%" />
                    <p> KHUSHALI, Staff </p>
                </div>
            </div>
        </div>
    );
}

function Aboutcontainer(){
    return(
            <div className="about-container">
                <div className="about-details-maincontainer1">
                    <div className="about-title">
                        About <span> us </span>
                    </div>

                    <div className="about-details-container1">
                        <div className="about-details-container1-subcontainer1">
                            <h3> Royal Events - We Create, You Celebrate. </h3>
                            <p> Our company is a full service company that provides complete consulting 
                                and sevice for Weddings, Anniversaries, Birthday parties and other entertainments. Organizes 
                                your different events like Wedding , Anniversary, Theme party, Birthday Party, Engagement, 
                                Pre-wedding Ceremony, Award Ceremony, Exhibition, Entertainment Evening, Festival Based Events, 
                                Showroom/Branch Inauguration etc. with personalize and affordable price. Give your special dates 
                                and your events plans to us and our team make your 
                                dream events happen so that your money becomes investment for you and not a waste for us.
                            </p>
                            <p>
                            Royal Events is committed to provide professional standards coupled with personalized service and
                            attention to make your event memorable and joyful.
                            </p>
                        </div>

                        <div className="about-details-container1-subcontainer2">
                            <div className="about-details-container1-subcontainer2-1">
                                <h3> Our Services </h3>
                                <div className="about-details-container-paragraph">
                                    <p> Wedding </p>
                                    <p> Birthday Party</p>
                                    <p> Anniversary </p>
                                    <p> Other Events </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-details-maincontainer2">
                    <h1 className="about-class1"> We Make Your Dream Occasion Happen</h1>
                    <p className="about-class2">
                        Royal Events is the 'one-stop' solution for all occasions 
                        and Events and it's main objective is to control or manage the activities and duties.
                        We always keep in mind that what our client needs to have on their dream Event. Our Company 
                        involves studying the brand, identifying the target audience, guestes and planning the logistic.
                    </p>
                </div>
            </div>
        );
}
export default function Aboutus(){
    return(
        <>
            <Aboutcontainer /> 
            <Aboutdetailsperson />            
            <Footerpage  />         
        </>
    );
}
