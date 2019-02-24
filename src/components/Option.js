import React from "react";

const Option = props => {
  return (
    <li key={props.key} className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button
        className="button button--link"
        onClick={e => {
          props.handleDeleteSingleOption(props.optionText);
        }}
      >
        remove
      </button>
    </li>
  );
};

export default Option;
