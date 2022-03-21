import axios from "axios";

export class ApiController {
    static host = axios.create({
        baseURL: "http://localhost:3333",
    });
}