import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie";

const BASE_URL: string | undefined = process.env.NODE_ENV === "production" ?
    process.env.REACT_APP_API_HOST_PROD :
    process.env.REACT_APP_API_HOST_DEV;

export const messageAPI = createApi({
    reducerPath: 'messageAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    refetchOnReconnect: true,
    refetchOnFocus: true,
    endpoints: (build) => ({
        getMessages: build.query({
            query: () => ({
                url: '/message',
                method: 'GET',
                headers: {
                    authorization: Cookies.get('TOKEN'),
                }
            })
        }),
    })
})