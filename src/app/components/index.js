import React from "react";
import { render } from "React-DOM";

class HomeComponent extends React.Component{

    render(){
       
        return(
            <div>
                <h1>It works with react</h1>
            </div>
        );

    }
}

render(<HomeComponent/>,document.getElementById("root"));