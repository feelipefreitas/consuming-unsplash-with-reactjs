import React from 'react';
import {SearchBar} from './searchBar/SearchBar';

export class App extends React.Component {

    searchImages = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.searchImages}/>
            </div>
        );
    }
}