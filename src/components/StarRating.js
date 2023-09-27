import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, maxRating }) => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            // Render a filled star if the current star is less than or equal to the rating
            stars.push(<FontAwesomeIcon icon={solidStar} key={i} />);
        } else {
            // Render an empty star if the current star is greater than the rating
            stars.push(<FontAwesomeIcon icon={regularStar} key={i} />);
        }
    }

    return <div>{stars}</div>;
};

export default StarRating;
