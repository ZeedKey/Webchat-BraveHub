import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333'
    }),
    endpoints: (build) => ({
        signin: build.query({
            query: (body) => ({
                url: '/auth/signIn',
            })
        }),
        signup: build.query({
            query: (body: any) => ({
                url: '/auth/signUp',
                method: 'POST',
                body
            })
        })
    })
})