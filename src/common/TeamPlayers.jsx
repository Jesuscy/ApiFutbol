import React from 'react'
import { TeamPlayer } from './TeamPlayer'
export const TeamPlayers = (props) => {
    // Verific si currentTeamSpecs tiene algún valor
    if (!props.data) {
        return null; // Si no hay datos, no se renderiza nada
    }
    const players = props.data.jugadores

    const closePlayers = () => {
        const playersContainer = document.getElementById('players-container')
        playersContainer.style.display = 'none'
    }

    return (
        <div className='col-md-6 player-rows-container' id='players-container'>
            <div className="row players-quit-rows"><button onClick={closePlayers}>X</button></div>
            {players.map((player) => (

                <TeamPlayer
                    key={player.id}
                    data={{
                        nombre: player.name,
                        posicion: player.position,
                        nacimiento: player.dateOfBirth,
                        nacionalidad: player.nacionality

                    }}
                />

            )

            )
            }
            <div className="row players-quit-rows" > <button onClick={closePlayers}>X</button></div>

        </div >
    )
}
