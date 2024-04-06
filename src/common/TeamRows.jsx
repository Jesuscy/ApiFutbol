import React from 'react'
import { TeamRow } from './TeamRow'

export const TeamRows = (props) => {
    const leagueData = props.data
    /*Aquí hacemos la peticion de todos los equipos de la liga, en las props nos viene la url de la liga. */


    return (
        <div className='col-md-6 team-rows-container'>
            <TeamRow />

        </div>
    )
}
