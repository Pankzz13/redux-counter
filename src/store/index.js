import { createStore } from "redux";

const initialState = { counter: 0, showToggler: true }

const counterReducers = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showToggler: state.showToggler
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showToggler: state.showToggler
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showToggler: state.showToggler
        };
    }

    if (action.type === 'toggle') {
        return {
            showToggler: !state.showToggler,
            counter: state.counter
        }
    }

    return state;
}


const store = createStore(counterReducers);


export default store;