import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"
import { IUser } from "../../models/user"

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333'
    }),
    endpoints: (build) => ({
        signin: build.query({
            query: (body: IUser) => ({
                url: '/auth/signIn',
                method: 'POST',
                body,
            })
        }),
        signup: build.query({
            query: (body: IUser) => ({
                url: '/auth/signUp',
                method: 'POST',
                body,
            }),
        })
    })
})