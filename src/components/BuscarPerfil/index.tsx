import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./styles.css";

type FormData = {
    userName: string;
}

export default function BuscarPerfil() {

    const [user, setUser] = useState<string>();

    const [formData, setFormData] = useState<FormData>({
        userName: '',
    });

    function handleUserNameChange(event: any) {
        setFormData({ ...formData, userName: event?.target.value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setUser(formData.userName);
    }

    return (
        <>
            <div className="searchSection">
                <h3>Encontre um perfil Github</h3>
                <form className="searchUserF" onSubmit={handleFormSubmit}>
                    <input className="searchUser" placeholder="Usuário GitHub"
                        type="text"
                        name="userName"
                        onChange={handleUserNameChange}
                        value={formData.userName}
                    />
                    <div className="dflex mt25">
                        <Link className="buttonSub" type="submit"
                            to={`/before/${formData.userName}`}
                            key={formData.userName}
                        >
                            Encontrar
                        </Link>
                    </div>
                </form>
            </div>
            <Outlet />
        </>
    )
}