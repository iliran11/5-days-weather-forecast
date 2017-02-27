import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({term: event.target.value})
    }
    onFormSubmit(event) {
        event.preventDefault();
        console.log("prevented!");
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input onChange={this.onInputChange} className="form-control" value={this.state.temr} placeholder="get a five-day forcast of your favorite city!"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
