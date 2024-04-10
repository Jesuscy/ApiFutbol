import React from 'react'

export const TeamPlayer = (props) => {
    const player = props.data
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="player-row">
                <div className='player-prop col-md-4 col-sm-4 col-xs-4'>
                    <p>{player.nombre}</p>
                </div>
                <div className='player-prop col-md-4 col-sm-4 col-xs-4'>
                    <p>{player.posicion}</p>

                </div>
                <div className='player-prop col-md-4 col-sm-4 col-xs-4'>
                    <p>{player.nacimiento}</p>

                </div>

            </div>
        </div>
    )
}
