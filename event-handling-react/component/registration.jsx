import FooterContainer from "./footer";

function Registraiondetails(){
    return(
        <>
            <div className="registration-container">
                <div className="registration-label">
                    <label htmlFor="name"> Name </label>
                    <label htmlFor="surname"> Surname </label>
                    <label htmlFor="username"> User Name </label>
                    <label htmlFor="email"> Email </label>
                    <label htmlFor="password"> Password </label>
                    <label htmlFor="mobile"> Mobile no </label>
                    <label htmlFor="address"> Address </label>
                </div>
                <div className="registration-input">
                    <input type="text" id="name" placeholder="Name" />
                    <input type="text" id="surname" placeholder="Surname" />
                    <input type="text" id="username" placeholder="User Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <input type="number" id="mobile" placeholder="Mobile No" />
                    <input type="address" id="address" placeholder="Address" />

                </div>
            </div>
            <button className="registration-button"> Submit</button>
        </>
    );
}
export default function Registration(){
    return(
        <>
            <div className="registration-section">
                <p className="registraion-header"> Registration Form </p>

                <Registraiondetails />
            </div>
            <FooterContainer />
        </>
    );
}