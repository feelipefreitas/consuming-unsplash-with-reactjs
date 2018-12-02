import React from 'react';

export class SearchBar extends React.Component {

    state={ searchText: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search for Images</label>
                        <input type="text" value={this.state.searchText} onChange={ e => this.setState({ searchText: e.target.value }) } />
                    </div>
                </form>
            </div>
        );
    }
}