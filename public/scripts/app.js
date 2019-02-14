'use strict';

var root = document.getElementById('root');

var visibility = true;

var toggleDisplay = function toggleDisplay() {
    visibility = !visibility;
    renderDOM();
};

var renderDOM = function renderDOM() {

    var DOM = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDisplay },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility ? React.createElement(
            'p',
            null,
            'Now you can see the content'
        ) : undefined
    );

    ReactDOM.render(DOM, root);
};

renderDOM();
