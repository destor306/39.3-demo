import React, { Component } from "react";

const withCounter = Component =>{
    return class extends React.Component{
        state = {
            count:0
        }
        increment = () =>{
            this.setState({
                count:this.state.count + 1
            })
        }
        decrement = () =>{
            this.setState({
                count:this.state.count - 1
            })
        }
        render(){
            return <Component 
                {...this.props}
                count={this.state.count}
                increment={this.increment}
                decrement={this.decrement}
            />
        }
    }
}

export default withCounter;