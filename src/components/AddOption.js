import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const value = e.target.elements.option.value.trim();
    const error = this.props.handleAddNewOption(value);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <legend className="add-option-legend">Add option:</legend>
          <input className="add-option__input" type="text" name="option" />
          <button className="button button--add" type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
