import React, {Component} from "react";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

class IntroPage extends Component {
    state = {  } 
    render() { 
        return (
                <div className="class">
                    <ul>
                        <div>
                                <h1 className="welcome">Welcome...</h1>
                                <p className="welcomemess">
                                    When you're ready to start organizing, communicating, connecting
                                    go ahead and start linking!
                                </p>
                                <br></br>
                                <br></br>
                                <button className="review" onClick={() => openInNewTab('/linklist')}>
                                    Start Linking
                                </button>
                        </div>
                           
                    </ul>
                    
                    



                
                </div>
        );
    }
}
 
export default IntroPage;