import React from 'react'
import { TeamSpecs } from './TeamSpecs'

export const TeamRow = (props) => {
    {/*Aquí recibimos las props de TeamRows que son los datos del equipo */ }
    console.log(props.data)

    return (

        <div onClick={() => { selectTeam(props.data) }} className="col-md-12 col-sm-12 col-xs-12">

            {/*El OnClick de cada teamRow va a recibir un método por props en el que cambiar el estado de selectedTeam */}
            <div className='team-row' >

                <div className='team-prop col-md-4 col-sm-4'>
                    <p>{props.data.nombre}</p>
                </div>
                <div className='team-prop col-md-2 col-sm-2'>
                    <p>Puntos: </p>
                </div>
                <div className='team-prop col-md-2 col-sm-2'>
                    <p>Trofeos:</p>
                </div>

            </div>
        </div>
    )
}
