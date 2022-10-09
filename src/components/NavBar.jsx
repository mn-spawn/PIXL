import React, {Component} from "react";

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <div> 

            <header id = 'navbar'>
            <ul> 
                <li>
                    <a className="click" href="/aboutUs" target= "_blank">About Us</a>
                    
                </li>
                <li>
                    <a className="click" href="https://github.com/mn-spawn/PIXL" target= "_blank" > GitHub</a>
                </li>
                <li>
                  <a className="click" href="/" target= "_blank" > Intro Page</a>
                </li>
            </ul>
            </header>
        </div>

        );
    }
}
 
export default NavBar;