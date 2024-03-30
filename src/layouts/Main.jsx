import { useEffect, useState } from "react"
import { Header } from "../common/Header"
import LigaEsp from "../../public/img/LaLigaTransparente.png"
import LigaIng from "../../public/img/PremierLeague.png"
import LigaItl from "../../public/img/LegaCalcio.png"
import LigaFr from "../../public/img/Ligue1.png"
import LigaAl from "../../public/img/BundesligaLogo.png"

export const Main = () => {
    //UseState -> SetLiga()
    const [liga, setLiga] = useState([])
    //Array de ligas.
    const ligas = [LigaEsp, LigaIng, LigaItl, LigaFr, LigaAl]
    useEffect(() => {

    }, [liga])

    return (
        <>
            <Header />

            <main>
                <div className="container">
                    <div className="row league-icon">
                        <div className="col-md-12">
                            <img />
                        </div>
                    </div>
                    <div className="row league-input">
                        <div className="col-md-8">
                            <input></input>
                        </div>
                    </div>
                    <div className="row league-button">
                        <div className="col-md-4">
                            <button></button >
                        </div>
                    </div>

                </div>

            </main>

            <footer>

            </footer>


        </>
    )
}
