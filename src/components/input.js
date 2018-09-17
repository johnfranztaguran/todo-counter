import React from 'react';

const Input = (props) => {
    
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text"  placeholder="enter..." onChange={props.onChange}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}
export default Input