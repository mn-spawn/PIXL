import React, {Component} from "react";

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <div> 

            <header id = 'navbar'>
            <ul> 
                <li>
                    <a id="click">Code Blog</a>
                    
                </li>
                <li>
                    <a id="click" href="https://github.com/mn-spawn" target= "_blank" > GitHub</a>
                </li>
                <li>
                  <a id="click"> Intro Page</a>
                </li>
            </ul>
            </header>
        </div>

        );
    }
}
 
export default NavBar;