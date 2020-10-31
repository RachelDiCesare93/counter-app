import React from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count -1);
    }

    const reset = () => {
        setCount(count);
    }

    // TODO: make return and buttons for counter
}

export default Counter;