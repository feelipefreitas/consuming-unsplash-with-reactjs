import unsplash from './base';

export const searchPhotos = (searchText) => {
    return unsplash.get('/search/photos', {
        params: {query: searchText}
    });
};