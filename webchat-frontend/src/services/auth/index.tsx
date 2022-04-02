import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IUser } from "../../models/user"

const BASE_URL: string | undefined = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_API_HOST_PROD :
    process.env.REACT_APP_API_HOST_DEV;

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
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