class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteSingleOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToDelete)
        }));
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

        this.setState((prevState) => ({ options: prevState.options.concat(newOption) }))
    }

    render() {
    
        const subtitle = 'Put your life in the hands of computer'
    
    return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteSingleOption={this.handleDeleteSingleOption}
                />
                <AddOption
                    handleAddNewOption={this.handleAddNewOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
        return (
            <div>
            <RemoveAll handleDeleteOptions={props.handleDeleteOptions}/>
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
            </div>
        )

}

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

        this.setState(() => ({ error }))

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

const RemoveAll = (props) => {
    return (
        <button onClick={props.handleDeleteOptions}>Remove All</button>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))