import React from 'react';
import {Image} from './Image';

export class ImagesContainer extends React.Component {

    render() {

        const images = this.props.images.map(image => {
            return <Image key={image.id} image={ image }/>
        });

        return(
            <div>
                {images}
            </div>
        );
    };
}