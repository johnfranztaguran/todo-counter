import React from 'react';

const Display = ({itemDisplay}) => {
    const list = itemDisplay.map((dataitem, i) => {
        return (
            <li key={i}>{dataitem}</li>
        )}
    )
    return (
        <div>{list}</div>
    )   
}
export default Display

