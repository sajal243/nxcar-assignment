import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => 'test-avail-cities',
    }),
    getCars: builder.mutation({
      query: (payload) => ({
        url: 'test-cars-list',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetCitiesQuery, useGetCarsMutation } = carApi;
