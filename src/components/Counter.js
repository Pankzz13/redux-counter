import { useSelector, useDispatch } from "react-redux";
import React from "react";






const Counter = () => {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const show = useSelector(state => state.showToggler);

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }

    const increaseHandler = () => {
        dispatch({ type: 'increase', amount: 5 })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    }

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' });
    }

    return (
        <main className="ui container">
            <h1>Redux Counter</h1>
            {show && <div style={{ marginLeft: '107px', fontSize: '1.5rem', }}>{counter}</div>}
            <div className="field">
                <button className="ui button" onClick={decrementHandler}>Decrement</button>
                <button className="ui button" onClick={increaseHandler}>IncreaseValueBy5 </button>
                <button className="ui button" onClick={incrementHandler}>Increment</button>
            </div>
            <button style={{ marginTop: '5px', marginLeft: '40px' }} className="ui button" onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}



export default Counter;