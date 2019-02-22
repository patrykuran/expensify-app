import React from 'react';

const Option = (props) => {
    return (
        <li key={props.key}>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteSingleOption(props.optionText)
                }}
            >
                remove
            </button>
        </li>
    )
}

export default Option;