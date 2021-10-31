import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom"
import Movies from "./Movies.js"

const Avenger = ({ hero }) => {
    const params = useParams();
    const { url, path } = useRouteMatch();
    const heros = hero.find(item => item.id === Number(params.hero));

    return (
        <div className="characters-list-wrapper">
            <div className="character-card">

                <h2>{heros.name}</h2>
                <h3>{heros.nickname}</h3>
                <p>{heros.description}</p>
                <img src={heros.img} alt="random avengers img" />

                <nav className="nav-buttons">
                    <NavLink to={`${url}/movies`} > Movie List </NavLink>
                </nav>

                <Route path={`${path}/movies`}>
                    <Movies movielist={heros} />
                </Route>

            </div>
        </div>
    )
}
export default Avenger;