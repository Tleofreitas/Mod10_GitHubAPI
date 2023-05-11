import { UsertDTO } from "../../models/product";
import * as accountService from '../../services/account-service';
import "./styles.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type FormData = {
    userName: string;
}

export default function BuscarPerfil() {
    const params = useParams();

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

    const [account, setAccount] = useState<UsertDTO>();

    useEffect (() => {
        accountService.findByAccount(String(params.userLogin))
        .then(response => {
            setAccount(response.data);
        });

    },[]);

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
            <div className="searchResult">
                <div>
                    <img className="avatar" src={account?.avatar_url} />
                </div>
                <div>
                    <div className="details">
                        <div><h4>Informações</h4></div>
                        <div><h5>Perfil: &nbsp; <p>{account?.url}</p></h5></div>
                        <div><h5>Seguidores: &nbsp; <p>{account?.followers}</p></h5></div>
                        <div><h5>Localidade: &nbsp; <p>{account?.location}</p></h5></div>
                        <div><h5>Nome: &nbsp; <p>{account?.name}</p></h5></div>
                    </div>
                </div>
            </div>
        </>
    )
}