import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as accountService from '../../../services/account-service';
import { UsertDTO } from "../../../models/user";

export default function After() {
    let params = useParams();

    let [account, setAccount] = useState<UsertDTO>();

    const [conditions, setConditions] = useState({
        showResponse: false,
        noContent: false
    });

    useEffect(() => {
        accountService.findByAccount(String(params.userLogin))
            .then(response => {
                setConditions({ ...conditions, noContent: false });
                setAccount(response.data);
            })
            .catch(() => setConditions({ ...conditions, noContent: true }));
    }, [account]);

    return (
        <main>
            <section>
                <div className="searchResult">
                    {
                        conditions.noContent
                        ? <h3>Erro ao buscar usuário</h3>
                        :
                        <>
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
                        </>
                    }
                </div>
            </section>
        </main>
    );
}

