import React from 'react'
import { useState } from "react"
import LeagueIcon from '../../public/img/league-icon.png'
import { TeamRows } from '../common/TeamRows'
import { TeamSpecs } from '../common/TeamSpecs'

export const LeagueTeams = (props) => {
    //Recibe las porps del Router en Main
    const data = { ...props.data }

    //UseState equipo seleccionado.
    const [selectedTeam, selectTeam] = useState();
    //Este es el método que vamos a pasar al componente TeamRow desde TeamsRow para cambiar el estado al clickar.
    const selectTeamChild = (team) => {
        selectTeam(team);
        console.log(team)

    }
    /*
      Para que los datos que se muestren en TeamSpecs sean los del equipo seleccionado por el usuario.
      hay que hacer un UseState que contenga un objeto Equipo que sea el seleccionado por el usuario --> TeamRow.jsx Aquí están las rows de cada equipo.
      y un useEffect que pinte <TeamSpecs data={ObjetoEquipo}/> cada vez que cambie el estado.

      Para obtener el valor de la fila seleccionada tenemos que cambiar selectedTeam desde TeamRow,
      hay que cambiar el useState desde el elemento hijo.    Segunda pregunta --> EJEMPLO.PNG */
    return (

        <div className='teams-list-container'>
            {/*Creamos el header del componente con la imagen y el nombre de la liga*/}
            <div className="row team-list-league-info">
                <div className="col-md-3 col-sm-3 col-xs-3 teams-list-league-img">
                    <img src={data.img} />
                </div>
                <div className="col-md-6  col-sm-6 col-xs-6 teams-list-league-name">{data.nombre}</div>
                <div className="col-md-3  col-sm-3 col-xs-3 teams-list-league-icon-img">
                    <img src={LeagueIcon} />
                </div>
            </div>
            {/*Row en la que renderizamos las Specs del equipo seleccionado y todos los equipos de la liga*/}
            <div className="row team-specs-container">
                <TeamSpecs />
                {/*Creamos TeamsRow pasandole los datos de la liga y el método de cambiar equipo*/}
                <TeamRows data={data} selectTeam={selectTeamChild} />
            </div>

        </div>
    )
}
