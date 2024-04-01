
import logo from "../../public/img/logo.png"
import logoGit from "../../public/img/github-icon.png"
import logoApi from "../../public/img/api-icon.png"


export const Header = () => {
    return (
        <div>
            <div className="row header-container">

                <div className="col-md-3 col-sm-3 col-xs-3 header-img ">
                    <img src={logo} />
                </div>
                <div className="col-md-6 col-sm-4 col-xs-6 header-title">
                    <h1>API FUTBOL</h1>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3 header-info">
                    <div className="col-md-3 header-info-icons">
                        <a href="https://github.com/Jesuscy/ApiFutbol">
                            <img src={logoGit} />
                        </a>
                    </div>
                    <div className="col-md-3 header-info-icons">
                        <a href="https://www.api-football.com">
                            <img src={logoApi} />
                        </a>
                    </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </div>




    )
}
