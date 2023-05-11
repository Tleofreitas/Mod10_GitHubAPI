import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findByAccount(account: string) {
    return axios.get(`${BASE_URL}/users/${account}`);
}
