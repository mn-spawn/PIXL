import React, {Component} from "react";
import toggle from 'react-toggle'

const options =  [, 'How Does it work?', 'What are the goals?', 'Flexibility']
class AboutUs extends Component {
    state = {  } 
    render() { 
        return (
                <div>
                    <h1 className="aboutush">How we got started:</h1>
                        <p className="aboutusp">
                        We noticed that social media and social justice have been intersecting more and more
                        especially with shareable resources and places to get involved. In addition, it's becoming more
                        and more common that content creators are putting charities and causes they support in bios or even
                        featuring them on streams. 
                        <br></br>

                        As a result we wanted to create something that would allow frequent and easy sharing and spreading of causes
                        and resources that also allowed a person to create a snapshot of their own personal affiliations, beliefs, and 
                        issues that they cared about.
                        </p>



                    <h1 className="aboutush">How Does it work?</h1>
                        <p className="aboutusp">
                        The user goes onto a list creator and inputs the links to resources they want to be present when someone scans
                        their QR code. Then they review their final list and generate a QR code if it looks good! They then can share this QR code
                        to whatever social media allows for picture uploads. It then can be scanned and reshared by anyone who sees it!
                        </p>



                    <h1 className="aboutush">What are the goals?</h1>
                        <p className="aboutusp">
                        The user goes onto a list creator and inputs the links to resources they want to be present when someone scans
                        their QR code. Then they review their final list and generate a QR code if it looks good! They then can share this QR code
                        to whatever social media allows for picture uploads. It then can be scanned and reshared by anyone who sees it!
                        </p>


                    <h1 className="aboutush">Flexibility</h1>
                        <p className="aboutusp">
                        We take pride in the flexibility of this program and hope that not only can it be used for sharing causes and movements 
                        but also to organize people and events beyond just social justice. The QR code could contain information about an event or
                        even just a list of readings or resources on a cool topic or idea. Shareability is endlessly applicable.   
                        </p>
                </div>
        );
    }
}
 
export default AboutUs;