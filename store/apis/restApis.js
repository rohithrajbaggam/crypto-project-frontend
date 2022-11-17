import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const restApi = createApi({
  reducerPath: "restApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    prepareHeaders: (headers, { getState }) => {
      // const token = getState()?.auth?.accessToken;

      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    // ** Get All Available Coins List
    getAllCoins: builder.query({
      query: (data) => `coinData/support-coins-list/`,
    }),

    // ** Get Visualizer Data
    getVisualizerData: builder.query({
      query: (data) =>
        `coinData/api-coin-graph-data/${data?.coin}/?vs_currency=${data?.currency}&days=${data?.days}`,
    }),

    // ** Get Analyser Data
    getAnalyserData: builder.query({
      query: (data) =>
        `/coinData/crypto-predictor/${data?.coin}/?vs_currency=${data?.currency}&days=${data?.days}`,
    }),

    // ** price converter
    getPriceConversion: builder.query({
      query: (data) =>
        `coinData/single-coin-price/?ids=${data?.coin}&vs_currencies=${data?.currency}`,
    }),
  }),
});

export const {
  useGetAllCoinsQuery,
  useGetVisualizerDataQuery,
  useGetPriceConversionQuery,
  useGetAnalyserDataQuery,
} = restApi;
export default restApi;
