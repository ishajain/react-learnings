import React from "react";
import { UserComponent} from "./UserComponent"; 
export  class HomeComponent extends React.Component{
 render (){
    
     return (
         <div>
             <h2>Hello from home component</h2>
             <UserComponent Users={
                [
                    {Name : "Isha" , Age : 33, Hobbies :["Cooking", "Dancing", "Yoga"]},
                    {Name : "Romit", Age : 32, Hobbies :["Cooking", "Cycling", "Reading", "Dancing"]}
                
                ]} InTotal={[2,3]}
             />
            
         </div>
     );
 }
};


