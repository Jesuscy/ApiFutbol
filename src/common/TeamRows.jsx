import React from 'react'
import { TeamRow } from './TeamRow'
import axios from 'axios'
export const TeamRows = (props) => {
    const leagueData = props.data
    /*Aquí hacemos la peticion de todos los equipos de la liga, en las props nos viene la url de la liga. */
    console.log(leagueData.url)
    const config = {
        headers: {
            'X-Auth-Token': '13f4273034d64c8d93015d3881f2457a'
        }
    }
    const response = axios.get('http://api.football-data.org/v4/competitions/PD/teams', config)
    console.log(response)

    return (
        <div className='col-md-6 team-rows-container'>
            <TeamRow data={leagueData} />

        </div>
    )
}
