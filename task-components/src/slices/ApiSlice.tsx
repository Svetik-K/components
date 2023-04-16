import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
    timeout: 1000,
  }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query({
      query: (name: string) => `character?name=${name}`,
    }),
    getCharacterById: builder.query({
      query: (id: number) => `character/${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersByNameQuery } = cardsApi;
