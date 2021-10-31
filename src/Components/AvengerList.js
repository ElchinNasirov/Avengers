import React from "react";
import { Link } from "react-router-dom";

const AvengerList = (props) => {

    return (
        <div className="items-list-wrapper">
            {props.hero.map(item => (
                <div className="characters-list-wrapper">

                    <Link to={`/avengers/${item.id}`}>
                        <div className="character-card">
                            <p>{item.name}</p>
                            <img src={item.thumbnail} alt="random avengers img" />
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    )
}
export default AvengerList;