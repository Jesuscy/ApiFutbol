import { useState } from "react"
import { Header } from "../common/Header"
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

    //Array de ligas.
    const ligas = [{ nombre: "La Liga (ESP)", img: LigaEsp, id: "" }, { nombre: "Premiere League (ENG)", img: LigaIng, id: "" }, { nombre: "Lega Calcio(ITL)", img: LigaItl, id: "" },
    { nombre: "Ligue 1 (FRA)", img: LigaFr, id: "" }, { nombre: "Bundesliga (ALE)", img: LigaAl, id: "" }]

    const mostrarLiga = (index) => {
        return (
            <div className="row leagues">
                <div className="col-md-2 col-sm-2 col-xs-12 change-league">
                    <button type="button" class="btn btn-lg league-button" onClick={() => {
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
                    </button >

                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 league-icon">
                    <img src={ligas[index].img} className="transition-img" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 change-league">
                    <button type="button" class="btn btn-lg league-button" onClick={() => {
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
                    </button >

                </div>
            </div>
        )

    }


    return (
        <>
            <Header />

            <main>
                <div className="container">
                    {mostrarLiga(liga)}
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-2 col-xs-12"></div>
                    <div className="col-md-8 col-sm-8 col-xs-12 league-submit">
                        <button type="button" class="btn btn-primary btn-lg">Ir a la {ligas[liga].nombre}</button>

                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12"></div>

                </div>



            </main >

            <footer>

            </footer>


        </>
    )
}
