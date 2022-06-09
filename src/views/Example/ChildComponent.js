import React from 'react';

class ChildComponent extends React.Component {
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
        {console.log(">>>prop data: ",this.props)}
        let {name, age} = this.props  
        return (
            <>
              <div>Child component: {name}-{age}</div>
                
            </> 
        )
    }
}

export default ChildComponent;