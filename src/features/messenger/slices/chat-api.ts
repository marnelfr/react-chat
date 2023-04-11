import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Message } from "./chat";

export const chatApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders(headers: Headers) {
      headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchChats: builder.query({
        query() {
          return `/chats`;
        },
      }),
      fetchMessages: builder.query({
        query(chartId) {
          return "/chats/" + chartId;
        },
      }),
    };
  },
});

export const { useFetchChatsQuery, useFetchMessagesQuery } = chatApiSlice;
