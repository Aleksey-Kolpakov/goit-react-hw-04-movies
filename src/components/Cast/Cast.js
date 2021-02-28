import React from 'react';
import { createFullImgLink } from '../../utils/helpers'
import Gallery from '../ImageGallery/Gallery';
const Cast = ({ cast }) => {
    return (
        <>
            <Gallery>
                {cast.length > 0 && cast.map(actor => (
                    <li key={actor.credit_id}>
                        <img src={createFullImgLink(actor.profile_path)} alt={actor.name} />
                        <h4>{actor.name}</h4>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </Gallery>
        </>
    );
};

export default Cast;
