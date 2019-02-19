class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDisplay}>{this.state.visibility ? 'Hide Details' : 'Show Details' }</button>
                {this.state.visibility ? <p>Now you can see the content</p> : undefined }
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<VisibilityToggle />, root)