/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const allProjectsApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
    }),
    getSingleProject: builder.query({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
    }),
    postProjects: builder.mutation<any, any>({
      query: (args) => {
        console.log(args);
        return {
          url: "/project",
          method: "POST",
        };
      },
    }),

    putProjects: builder.mutation<any, any>({
      query: (id: any) => {
        return {
          url: `/project/${id}`,
          method: "PUT",
          // transformResponse:(data:string)=>{
          //     return JSON.parse(data)
          // }
        };
      },
    }),

    // getAllProjects: builder.query({
    //   query: (limit = 1) => ({
    //     url: `/project?limit=${limit}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["supplies"],
    // }),
    // getSingleProject: builder.query({
    //   query: (data) => ({
    //     url: `/project/${data.id}`,
    //     method: "GET",
    //   }),
    // }),
    createProject: builder.mutation({
      query: (data) => {
        return {
          url: `/project/create-supply`,
          method: "POST",
          body: data,
        };
      },
      // invalidatesTags: ["projects"],
    }),
    deleteProject: builder.mutation({
      query: (data) => ({
        url: `/project/${data.id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["supplies"],
    }),
    updateProject: builder.mutation({
      query: (data) => ({
        url: `/project/${data.id}`,
        method: "PATCH",
        body: data.payload,
      }),
      // invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useLazyGetAllProjectsQuery,
  useLazyGetSingleProjectQuery,
  usePostProjectsMutation,
  usePutProjectsMutation,






  // useGetSingleReliefGoodsQuery,
  // usePutReliefGoodsMutation,
  // usePostReliefGoodsMutation,
  // useGetAllSupplyQuery,
  // useGetSingleSupplyQuery,
  // useCreateSupplyMutation,
  // useUpdateSupplyMutation,
  // useDeleteSupplyMutation,
} = allProjectsApi;

// export default allReliefGoodsApi.reducer;

// export const allReliefGoodsApi = createApi({
//     reducerPath: 'allReliefGoodsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/relief-goods' }),
//     endpoints: (builder) => ({
//       getAllReliefGoods: builder.query({
//         query: () => `allReliefData`,
//       }),
//     }),
//   })
//   export const {useGetAllReliefGoodsQuery} = allReliefGoodsApi;
