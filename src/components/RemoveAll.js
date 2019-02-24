import React from 'react';

const RemoveAll = (props) => {
    return (
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    )
}

export default RemoveAll;