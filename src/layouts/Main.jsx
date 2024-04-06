import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react"
import { Header } from "../common/Header"
import { LeagueTeams } from "../layouts/LeagueTeams"
//Importamos todas las imagenes a usar en el componente.
import LigaEsp from "../../public/img/LaLigaTransparente.png"
import LigaIng from "../../public/img/PremierLeague.png"
import LigaItl from "../../public/img/LegaCalcio.png"
import LigaFr from "../../public/img/Ligue1.png"
import LigaAl from "../../public/img/BundesligaLogo.png"
import btnSiguiente from "../../public/img/next-arrow.png"
import btnAnterior from "../../public/img/back-arrow.png"



export const Main = () => {
    //Urls Axios --> Api.
    const Premier_League_URL = 'http://api.football-data.org/v4/competitions/PL/teams'
    const Bundesliga_URL = 'http://api.football-data.org/v4/competitions/BL1/teams'
    const Lega_Calcio_URL = 'http://api.football-data.org/v4/competitions/SA/teams'
    const La_Liga_URL = 'http://api.football-data.org/v4/competitions/PD/teams'
    const Ligue_1_URL = 'http://api.football-data.org/v4/competitions/FL1/teams'

    //UseState -> SetLiga()
    const [liga, setLiga] = useState(0)
    const [inputVal, setInputVal] = useState("")

    //Array de ligas con los datos necesarios en el resto de comoponentes.
    const ligas = [{ nombre: "La Liga (ESP)", img: LigaEsp, url: La_Liga_URL }, { nombre: "Premiere League (ENG)", img: LigaIng, url: Premier_League_URL }, { nombre: "Lega Calcio (ITL)", img: LigaItl, url: Lega_Calcio_URL },
    { nombre: "Ligue 1 (FRA)", img: LigaFr, url: Ligue_1_URL }, { nombre: "Bundesliga (ALE)", img: LigaAl, url: Bundesliga_URL }]


    //Método selección de liga.
    const showLeague = (index) => {
        return (
            //Renderizamos el icono de la liga y los botones para cambiar de liga junto a la lógica.
            <div className="row leagues">
                <div className="col-md-2 col-sm-2 col-xs-12 change-league">
                    <button type="button" className="btn btn-lg league-button" onClick={() => {
                        if (liga > 0) {
                            setLiga(liga - 1);
                            setInputVal(ligas[liga].nombre)
                        } else {
                            setLiga(ligas.length - 1);
                            setInputVal(ligas[liga].nombre)

                        }

                    }}>
                        LIGA ANTERIOR
                        <img src={btnAnterior}></img>
                    </button>

                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 league-icon">
                    <img src={ligas[index].img} className="transition-img" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 change-league">
                    <button type="button" className="btn btn-lg league-button" onClick={() => {
                        if (liga < ligas.length - 1) {
                            setLiga(liga + 1);
                            setInputVal(ligas[liga].nombre)

                        } else {
                            setLiga(0);
                            setInputVal(ligas[liga].nombre)

                        }
                    }}>
                        LIGA SIGUIENTE
                        <img src={btnSiguiente}></img>
                    </button>

                </div>
            </div>
        )

    }



    return (
        //Router en el que añadimos la url del componente de la liga seleccionada, y pasamos las props de la liga que hay seleccionada (data) (No se cierra hasta pasado el <Link to='/league'/> porque Router ha de ser padre de Link ).
        <>

            <Router>
                <Routes>

                    <Route path='/league' element={<LeagueTeams data={ligas[liga]} />} />
                </Routes>

                <Header />
                <main>
                    {/*Aquí llamamos a showLeague para mostrar la liga */}
                    <div className="container">
                        {showLeague(liga)}
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12"></div>
                        <div className="col-md-8 col-sm-8 col-xs-12 league-submit">
                            {/*Boton que redirige al comoponente (El componente ya tiene las props de la liga porque se las pasamos en Route)*/}
                            <Link to='/league' className='league-submit'>
                                <button type="button" className="btn btn-primary btn-lg ">Ir a la {ligas[liga].nombre}</button>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12"></div>

                    </div>




                </main >
            </Router>

            {/*Falta hacer Footer */}
            <footer>

            </footer>


        </>
    )
}
