import FooterContainer from "./footer";

function HomeContainer1(){
    return(
        <>
                <div className="home-container1">
                    <p> Making Moments Memorable... </p>
                </div>
                <div className="home-details-container">
                    <div className="home-details-container1">
                        <h2>What we are </h2>
                        <p>
                        Royal Events is young and dynamic event management compnay, which 
                        positions itself as "One-Stop Solutions" for all event needs. At Royal Events,we strive 
                        to be the most reliable and creative provider of a wide range of services to the clients.
                        </p>
                        <p>
                        Royal Events is one of the leading corporate event management companies in india.
                        </p>
                        <button className="button-home-details"> Read more </button>
                    </div>
                    <div className="home-details-container2">
                        <img src="./images/cs_event.jpg" alt="flower" width='100%' />
                    </div>
                    <div className="home-details-container3">
                        <h2> Our Specifications.. </h2>
                        <div className="Home-details-container3-main-subcontainer">
                            <div className="home-details-container3-subcontainer">
                                <div className="home-details-container3-subcontainer1">
                                    <p> 01</p>
                                </div>
                                <div className="home-details-container3-subcontainer2">
                                    <p> Designer Wedding</p>
                                    <p style={{color: "rgba(0, 0, 0, 0.445)"}}>
                                    Royal Events offers comprehensive wedding planning solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="home-details-container3-subcontainer">
                                <div className="home-details-container3-subcontainer1">
                                    <p> 02 </p>
                                </div>
                                <div className="home-details-container3-subcontainer2">
                                    <p> Destination Wedding </p>
                                    <p style={{color: "rgba(0, 0, 0, 0.445)"}}>
                                        Choose a beautiful location for your wedding function.
                                    </p>
                                </div>
                            </div>
                            <div className="home-details-container3-subcontainer">
                                <div className="home-details-container3-subcontainer1">
                                    <p> 03 </p>
                                </div>
                                <div className="home-details-container3-subcontainer2">
                                    <p> Theme Wedding </p>
                                    <p style={{color: "rgba(0, 0, 0, 0.445)"}}>
                                    Our wedding themes come with numerous varieties.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </>
    );
}
export default function Home(){
    return(
        <>
            <HomeContainer1 />
            <FooterContainer />
        </>
    )
}