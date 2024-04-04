import React from 'react'
import LeagueIcon from '../../public/img/league-icon.png'
export const LeagueTeams = (props) => {
    const data = { ...props.data }
    return (
        <div className='teams-list-container'>

            <div className="row team-list-league-info">
                <div className="col-md-3 teams-list-league-img">
                    <img src={data.img} />
                </div>
                <div className="col-md-6 teams-list-league-name">{data.nombre}</div>
                <div className="col-md-3 teams-list-league-icon-img">
                    <img src={LeagueIcon} />
                </div>
            </div>

        </div>
    )
}
