import React from 'react';
import { createFullImgLink } from '../../utils/helpers'
const Cast = ({ cast }) => {
    return (
        <>
            <ul>
                {cast.length > 0 && cast.map(actor => (
                    <li key={actor.credit_id}>
                        <img src={createFullImgLink(actor.profile_path)} alt={actor.name} />
                        <h4>{actor.name}</h4>
                        <p>{actor.character}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Cast;
