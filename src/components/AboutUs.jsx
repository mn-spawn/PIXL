import React, {Component} from "react";

class AboutUs extends Component {
    state = {  } 
    render() { 
        return (
                <div>
                    <div
                         style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >

                        <h1>About Us</h1>
                    </div>

                        <p>
                            This is about us...
                        </p>
                    </div>
        );
    }
}
 
export default AboutUs;