import React from "react";

const Movies = (props) => {
    return(
        <div>
            <p className="item-description">
                {props.movielist.movies}
            </p>
        </div>
    )
}
export default Movies;