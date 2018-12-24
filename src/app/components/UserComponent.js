import React from "react";
export class UserComponent extends React.Component{
    
    render(){
    return(<div>{this.props.Users
        .map(
                (User,index)=>  
                    <div key={index}> 
                        <h4>User {index+1}:</h4>
                        <p>Name:{User.Name}</p>
                        <p>Age:{User.Age}</p>
                        <div>Hobbies:
                     <ul>
                         {User.Hobbies.map((Hobby,index)=><li key={index}>{Hobby}</li>)}
                     </ul>
                </div>
                    </div>
                )}</div>);
    
        //return(<div>{this.props.InTotal.map((value)=><p>{value}</p>)}</div>);
    }
}




            
           
