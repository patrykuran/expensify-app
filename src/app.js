const app = {
    title: "Indecision App",
    subtitle: "A helping hand in making up your mind!",
    options: ["One", "two", "three"]
}

const renderDOM = function() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
    
            <button onClick={removeAll}>Remove All Options</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>
                    Add Option
                </button>
            </form>
        </div>
    );

    ReactDOM.render(template, root);
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value
    
    if(option) {
        app.options.push(option)
        event.target.elements.option.value = ""
        renderDOM();
    }
}

const removeAll = () => {
    app.options= [];
    renderDOM();
}

const root = document.getElementById('root');

renderDOM();
