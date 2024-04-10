import React, { useEffect, useState } from 'react'
import { TeamRow } from './TeamRow'
import axios from 'axios'
export const TeamRows = (props) => {
    const leagueData = props.data
    const sendRequest = props.sendRequest
    const selectTeam = props.selectTeam
    //UseState array de equipos
    const [teams, setTeams] = useState([]);

    /*Aquí pasamos la url de la leagueData al server para que haga la petición y recibimos los datos*/

    const getTeams = async () => {

        const league = await sendRequest(leagueData.url)
        const teams = league.teams
        console.log(teams)
        setTeams(teams)
    }
    useEffect(() => { getTeams() }, [leagueData.url])



    /*const renderTeams = async () => {

        const teams = await getTeams()

        teams.map((team) => {
            const teamProps = {
                nombre: team.name,
                jugadores: team.squad,
                estadio: team.venue,
                fundacion: team.founded

            }
            console.log(teamProps)
            return (
                <>
                    <TeamRow data={teamProps} />
                </>
            )
        })

    }
    */



    return (
        <div className='col-md-6 team-rows-container'>
            {teams.map((team) => (
                
                <TeamRow
                    key={team.id}
                    data={{
                        nombre: team.name,
                        jugadores: team.squad,
                        estadio: team.venue,
                        fundacion: team.founded,
                        
                    }}
                    selectTeam={selectTeam}
                />
            )
            )}
        </div>
    )
}






