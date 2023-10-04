import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APIBASEURL;

export const apiSlice = createApi({
  reducerPath: "myWorksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,

    // baseUrl: `http://192.168.1.7:5000/`,
  }),
  endpoints: (builder) => ({
    // start contact
    contact: builder.mutation({
      query: (name, email, phone, message) => ({
        url: `/users/contact-me`,
        method: "PUT",
        body: name,
        email,
        phone,
        message,
      }),
    }),
    // end contact
    // start refresh
    refresh: builder.query({
      query: () => `/users/refresh`,
    }),
    // end refresh
    refreshBlog: builder.query({
      query: () => `https://laconicblogsampleapi.onrender.com/`,
      // query: () => `http://192.168.1.7:5000/`,
    }),
  }),
});

export const { useContactMutation, useRefreshQuery, useRefreshBlogQuery } =
  apiSlice;
