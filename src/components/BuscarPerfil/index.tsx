import "./styles.css";

import { useState } from "react";

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
                            <button className="buttonSub" type="submit">
                                Encontrar
                            </button>
                    </div>
                </form>
            </div>
            <h2>{user}</h2>
        </>
    )
}