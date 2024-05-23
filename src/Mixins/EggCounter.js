import React from "react";
import CountMixin from './CounterMixin';

import createReactClass from "create-react-class";

const EggCounter = createReactClass({
    mixins:[CountMixin],
    render:function(){
        return(
            <div>
                <h1>{'egg'.repeat(this.state.count)}</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
});

export default EggCounter;