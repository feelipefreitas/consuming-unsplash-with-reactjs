import React from 'react';
import {SearchBar} from './searchBar/SearchBar';
import {searchPhotos} from '../api/unsplash/requests';

export class App extends React.Component {

    searchImages = async (searchText) => {
        const response = await searchPhotos(searchText);
        console.log(response.data.results);
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.searchImages}/>
            </div>
        );
    }
}