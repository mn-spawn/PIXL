import React, {Component} from "react";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

class IntroPage extends Component {
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

                        <h1>Welcome...</h1>
                    </div>
                    <button className="review" onClick={() => openInNewTab('/linklist')}>
                        Start Linking
                    </button>
                </div>
        );
    }
}
 
export default IntroPage;