import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

type FormData = {
    user: string;
}

export default function BuscarPerfil() {

    const [, setUser] = useState<string>();

    const [formData, setFormData] = useState<FormData>({
        user: '',
    });

    function handleuserChange(event: any) {
        setFormData({ ...formData, user: event?.target.value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setUser(formData.user);
    }

    return (
        <>
            <div className="searchSection">
                <h3>Encontre um perfil Github</h3>
                <form className="searchUserF" onSubmit={handleFormSubmit}>
                    <input className="searchUser" placeholder="Usuário GitHub"
                        type="text"
                        name="userName"
                        onChange={handleuserChange}
                        value={formData.user}
                    />
                    <div className="dflex mt25">
                        <Link className="buttonSub" type="submit"
                            to={`/before/${formData.user}`}
                            key={formData.user}
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