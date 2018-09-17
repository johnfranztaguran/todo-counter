import React from 'react';

const Compo = (props) => {
    const {  changeHere, allHere } = props
    
    
    return (
        <div>
            
            <div>
              
            <button type="button" name="increment" className="login-btn" onClick={() => allHere(changeHere, "plus")} >+</button>
            <button type="button" name="decrement" className="login-btn" onClick={() => allHere(changeHere, "minus")}>-</button>
            </div>
            <div>{changeHere}</div>
            
        </div>
    )
}
export default Compo