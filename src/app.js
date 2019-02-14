class IndecisionApp extends React.Component {
    render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['Option one', 'Option two', 'Option three', 'Option five', 'Option six'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <RemoveAll />
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
    handleAddOption(e) {
        e.preventDefault()
        const value = e.target.elements.option.value.trim();
        console.log(value);
    }

    render() {
        return(
            <div>
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
    handleRemoveAll() {
        alert("lol")
    }

    render() {
        return (
            <button onClick={this.handleRemoveAll}>Remove All</button>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))