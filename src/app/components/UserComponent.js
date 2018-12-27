import React from "react";
import PropTypes from 'prop-types';
export class UserComponent extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.age
        }
       
    }
    
    makeMeOlder(){
       
        this.setState({
              age: this.state.age +=3
        })
        
        
    }
    
    render(){
        
    return(
        <div>I am {this.props.name} and my age is  {this.state.age}. <br/>
        <button onClick={() =>  this.makeMeOlder()} >Make me older!!</button>
        </div>
    );
    }
}

UserComponent.propTypes={
    age : PropTypes.number
};




            
           
