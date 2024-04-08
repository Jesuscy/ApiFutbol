import React from 'react'
import { TeamRow } from './TeamRow'
import axios from 'axios'
export const TeamRows = (props) => {
    const leagueData = props.data
    const sendRequest = props.sendRequest
    /*Aquí pasamos la url de la leagueData al server para que haga la petición y recibimos los datos*/
    const teams = sendRequest(leagueData.url)
    console.log(teams)


    return (
        <div className='col-md-6 team-rows-container'>
            <TeamRow data={leagueData} />

        </div>
    )
}
