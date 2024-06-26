import React from 'react'
import { TeamPlayers } from './TeamPlayers';

export const TeamSpecs = (props) => {
    {/*Aquí vamos a recibir los datos del equipo y mostrarlos en sus divs */ }
    const currentTeamSpecs = props.data

    // Verific si currentTeamSpecs tiene algún valor
    if (!currentTeamSpecs) {
        return null; // Si no hay datos, no se renderiza nada
    }
    const showPlayers = () => {
        const playersContainer = document.getElementById('players-container')
        playersContainer.style.display = 'block'
    }

    return (
        <div className="col-md-6 col-sm-6 col-xs-6 team-specs">
            <div className="row spec">CULB_IMG</div>
            <div className="row spec">Nombre: {currentTeamSpecs.nombre}</div>
            <div className="row spec">Entrenador:{currentTeamSpecs.entrenador}</div>
            <div className="row spec">Estadio: {currentTeamSpecs.estadio} </div>
            <div className="row spec"><button onClick={showPlayers}>Ver Jugadores: </button></div>
        </div>
    )
}