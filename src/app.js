class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);

        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }

    handleAddNewOption(newOption) {
        if(!newOption) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOption)
            }
        })
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    
    return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddNewOption={this.handleAddNewOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <RemoveAll handleDeleteOptions={this.props.handleDeleteOptions}/>
                <ul>Here are your {this.props.options.length} options:
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.key}>Option: {this.props.optionText}</li>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()

        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddNewOption(value);

        this.setState(() => {
           return { error }
        })

        e.target.elements.option.value = ''
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <legend>Add option:</legend>
                    <input type="text" name="option"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}

class RemoveAll extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))