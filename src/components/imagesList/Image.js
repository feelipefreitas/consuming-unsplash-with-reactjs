import React from 'react';

import './Image.css';

export class Image extends React.Component {
    render() {
        const {description, urls} = this.props.image;
        return (
            <div>
                <img alt={description} src={urls.regular} />
            </div>
            
        );
    }
}