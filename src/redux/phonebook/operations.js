import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// === code with RTK Query ===

// /* axios defaults baseURL is already in use with auth
const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url, method, data, params });
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
  reducerPath: 'phonebookApi',
  baseQuery: axiosBaseQuery({
    prepareHeaders: (headers, { getState }) => {
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
      providesTags: ['Contact'],
    }),

    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'post',
        data: {
          name: name,
          number: number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: build.mutation({
      query(id, data) {
        return {
          url: `contacts/${id}`,
          method: 'PATCH',
          data,
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
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
