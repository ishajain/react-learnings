import React from "react";

import { UserComponent} from "./UserComponent"; 
export  class HomeComponent extends React.Component{
 render (){
    
     return (
         <div>
             <h2>Hello from home component</h2>
             <UserComponent name={"Isha"} age = {34} />
           
         </div>
     );
 }
};


