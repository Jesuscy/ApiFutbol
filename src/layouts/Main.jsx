import { useState } from "react"
import { Header } from "../common/Header"
import LigaEsp from "../../public/img/LaLigaTransparente.png"
import LigaIng from "../../public/img/PremierLeague.png"
import LigaItl from "../../public/img/LegaCalcio.png"
import LigaFr from "../../public/img/Ligue1.png"
import LigaAl from "../../public/img/BundesligaLogo.png"

export const Main = () => {
    //UseState -> SetLiga()
    const [liga, setLiga] = useState(0)
    const [inputVal, setInputVal] = useState("")

    //Array de ligas.
    const ligas = [{ nombre: "La Liga (ESP)", img: LigaEsp, id: "" }, { nombre: "Premiere League (ENG)", img: LigaIng, id: "" }, { nombre: "Lega Calcio(ITL)", img: LigaItl, id: "" },
    { nombre: "Ligue 1 (FRA)", img: LigaFr, id: "" }, { nombre: "Bundesliga (ALE)", img: LigaAl, id: "" }]

    const mostrarLiga = (index) => {
        return (
            <div className="row leagues">
                <div className="col-md-2 change-league">
                    <button type="button" class="btn btn-secondary btn-lg" onClick={() => {
                        if (liga > 0) {
                            setLiga(liga - 1);
                            setInputVal(ligas[liga].nombre)
                        } else {
                            setLiga(ligas.length - 1);
                            setInputVal(ligas[liga].nombre)

                        }
                    }}>LIGA ANTERIOR</button >

                </div>

                <div className="col-md-8 league-icon">
                    <img src={ligas[index].img} />
                </div>
                <div className="col-md-2 change-league">
                    <button type="button" class="btn btn-secondary btn-lg" onClick={() => {
                        if (liga < ligas.length - 1) {
                            setLiga(liga + 1);
                            setInputVal(ligas[liga].nombre)

                        } else {
                            setLiga(0);
                            setInputVal(ligas[liga].nombre)

                        }
                    }}>LIGA SIGUIENTE</button >

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
                    <div className="col-md-2"></div>
                    <div className="col-md-8 league-submit">
                        <button type="button" class="btn btn-primary btn-lg">Ir a la {ligas[liga].nombre}</button>

                    </div>
                    <div className="col-md-2"></div>

                </div>



            </main >

            <footer>

            </footer>


        </>
    )
}
