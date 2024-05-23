import React from "react";

class Counter extends React.Component{
    static defaultProps ={
        color: 'orange'
    }
    constructor(props){
        super(props);
        this.state ={
            count :0,
            isHiding : false
        }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);

    }
    increment = () => {
        this.setState({count: this.state.count +1})
    }
    decrement = () => {
        this.setState({count: this.state.count -1})
    }
    // only run one time great for fetching data
    componentDidMount(){
        console.log("Component Mounted")
    }

    componentDidUpdate(){
        console.log("Component Updated")
    }

    componentWillUnmount(){
        console.log("ABOUT TO GET BYEBYE")
    }
    render(){
        console.log("COMPONENT RENDERING")
        const{color} = this.props;
        const {count} = this.state;
        return(
            <div>
                <h1 style={{color}}>I AM COUNTER</h1>
                <h3>Count Is: {count}</h3>
                <button onClick={this.increment}>Add 1</button>
                <button onClick={this.decrement}>Subtract 1</button>
            
            </div>
        )
    }
}

export default Counter;