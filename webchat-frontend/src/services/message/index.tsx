import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const messageAPI = createApi({
    reducerPath: 'messageAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333'
    }),
    endpoints: (build) => ({
        getMessages: build.query({
            query: () => ({
                url: '/message',
                method: 'GET',
                authorization: Cookies.get('TOKEN'),
            })
        }),
    })
})