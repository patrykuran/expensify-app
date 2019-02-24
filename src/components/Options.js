import React from "react";
import Option from "./Option";
import RemoveAll from "./RemoveAll";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">
          {props.options.length > 0 && <p>{props.options.length === 1 ? 'Here is your 1 option' : `Here are your ${props.options.length} options:`}</p>}
        </h3>
        <RemoveAll
          className="button button--link"
          handleDeleteOptions={props.handleDeleteOptions}
        />
      </div>

      {props.options.length === 0 && <p className="widget__message">Add some options to get started!</p>}
      {props.options.length > 0 && (
        <ol className="options">
          {props.options.map((option, index) => (
            <Option
              key={option}
              optionText={option}
              count={index + 1}
              handleDeleteSingleOption={props.handleDeleteSingleOption}
            />
          ))}
        </ol>
      )}
    </div>
  );
};

export default Options;
