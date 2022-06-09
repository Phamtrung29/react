import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
         firstName : "",
         lastName : ""
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }
    handleChangeLastName = (event1) => {
        this.setState({
            lastName : event1.target.value
        })
    }
    handleSubmit = (event) => {
            event.preventDefault()
            console.log(">>Check data: ", this.state)
        }
    render() {
        
        console.log("call render", this.state)
        return (
            <>
              
                <form >
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" 
                    value={this.state.lastName}
                    onChange={(event1) => this.handleChangeLastName(event1)}
                    /><br/>
                    <br/>
                    <input type="submit"
                    onClick ={(event) => this.handleSubmit(event)}
                    
                    />
                    
    
                </form> 
                <ChildComponent name = {'child one'}  age ={15}/>
        

            </> 
        )
    }
}

export default MyComponent;