import React from 'react';
import Option from './Option';
import RemoveAll from './RemoveAll';

const Options = (props) => {
    return (
        <div>
        <RemoveAll handleDeleteOptions={props.handleDeleteOptions}/>
        {props.options.length === 0 && <p>Add some options to get started!</p>}
        {props.options.length > 0 &&    
        <ul>Here are your {props.options.length} options:
            {props.options.map((option) => (
                <Option 
                    key={option}
                    optionText={option}
                    handleDeleteSingleOption={props.handleDeleteSingleOption}
                    />
                )
                )}
            </ul>
        }
        </div>
    )

}


export default Options;