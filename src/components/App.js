import React from 'react';
import {searchPhotos} from '../api/unsplash/requests';

import {SearchBar} from './searchBar/SearchBar';
import {ImagesContainer} from './imagesList/ImagesContainer';

export class App extends React.Component {

    state={ images: [] };

    searchImages = async (searchText) => {
        const response = await searchPhotos(searchText);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={ this.searchImages }/>
                <ImagesContainer images={ this.state.images } />
            </div>
        );
    }
}