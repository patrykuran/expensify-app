import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";

class IndecisionApp extends React.Component {
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteSingleOption = optionToDelete => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToDelete)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddNewOption = newOption => {
    if (!newOption) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(newOption) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(newOption)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const optionsObject = JSON.parse(json);

      if (optionsObject) {
        this.setState(() => ({ options: optionsObject }));
      }
    } catch (e) {
      //Don't do anything
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle = "Put your life in the hands of computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption handleAddNewOption={this.handleAddNewOption} />
      </div>
    );
  }
}

export default IndecisionApp;
