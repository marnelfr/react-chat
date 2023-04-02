import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Message } from "./chat";

export const chatApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders(headers: Headers) {
      // headers.set('Autho....')
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchAnswer: builder.query<Message, string>({
        query(message) {
          return `/message?text=${message}`;
        },
      }),
    };
  },
});

export const { useFetchAnswerQuery } = chatApiSlice;
