import React from "react";
import withCounter from "./withCounter";

const Counter = props =>(
    <div>
        <div>Current count: {props.count}</div>
        <div>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>

        </div>
    </div>
)
export default withCounter(Counter);