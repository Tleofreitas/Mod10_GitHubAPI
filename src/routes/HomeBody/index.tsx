import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function HomeBody() {

    return (
        <main>
            <section>
                <div className="container">
                    <div>
                        <h1 className="mt25 titleHome">Desafio Github API</h1>
                        <h2 className="subtitleHome">DevSuperior - Escola de programação</h2>
                    </div>
                    <div className="dflex mt25">
                        <Link to="/before">
                            <Button text="Começar" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}