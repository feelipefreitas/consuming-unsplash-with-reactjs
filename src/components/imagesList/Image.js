import React from 'react';

export class Image extends React.Component {
    render() {
        const {description, urls} = this.props.image;
        return (
            <img alt={description} src={urls.regular} />
        );
    }
}