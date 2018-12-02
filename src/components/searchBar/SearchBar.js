import React from 'react';

export class SearchBar extends React.Component {
    render() {
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search for Images</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        );
    }
}