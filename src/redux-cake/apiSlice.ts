import { fakeBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fakeBaseQuery(),
  tagTypes: [
    "user",
    "organizations",
    "environments",
    "projects",
    "todos",
    "tags",
    "goals",
    "subtodos",
  ],
  endpoints: () => {
    return {};
  },
});

export { apiSlice };
