import { Link } from "react-router-dom";
import "./styles.css";
import Button from "../Button";

export default function BuscarPerfil() {

    return (
        <div className="searchSection">
            <h3>Encontre um perfil Github</h3>
            <p>T2</p>
            <div className="dflex mt25">
                <Link to="/before">
                    <Button text="Encontrar" />
                </Link>
            </div>
        </div>
    )
}