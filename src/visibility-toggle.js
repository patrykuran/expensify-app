const root = document.getElementById('root');

let visibility = true;

const toggleDisplay = () => {
    visibility = !visibility;
    renderDOM();
}

const renderDOM = function() {

    const DOM = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDisplay}>{visibility ? 'Hide Details' : 'Show Details' }</button>
            {visibility ? <p>Now you can see the content</p> : undefined }
        </div>
    )

    ReactDOM.render(DOM, root)

}

renderDOM();