import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

// === code with RTK Query ===
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const phonebookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      console.log('headers', headers);
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),
      // providesTags: ['Contact'],
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contact', id })),
              { type: 'Contact', id: 'LIST' },
            ]
          : [{ type: 'Contact', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'post',
        body: { name: name, number: number },
      }),
      // invalidatesTags: ['Contact'],
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'delete',
      }),
      // invalidatesTags: ['Contact'],
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;

// === code with createAsyncThunk ===

// // GET @ /contacts
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// /*
//  * POST @ /contacts
//  * body: { name, number }
//  */

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/contacts', {
//         name: name,
//         number: number,
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// /*
//  * DELETE @ /contacts/:id
//  * body: id
//  */

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
