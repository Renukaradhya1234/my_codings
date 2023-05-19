export default function Services({heading, heading3, para1, para2, image1, image2, image3}){
    return (
        <>
            <div className="function-container">
                <div className="function-header">
                    <span>{heading}</span> page
                </div>
                <div className="function-details-container">
                    <div className="function-details">
                        <h3> {heading3}</h3>
                        <p> {para1}</p>
                        <p> {para2}</p>
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
                    <div className="function-details-images">
                        <img src={image1} alt="image1" width="100%" />
                        <img src={image2} alt="image2" width="100%" />
                        <img src={image3} alt="image3" width="100%" />   
                    </div>
                    <div className="function-details">
                        
                    </div>
                </div>

            </div>
        </>
    )
}