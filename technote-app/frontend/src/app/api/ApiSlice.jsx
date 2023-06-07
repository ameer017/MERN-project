import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi ({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4500'}),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})