import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://64875a16beba629727907f9e.mockapi.io'}),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
  }),
})

export const {useGetContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactsApi

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(addContact.fulfilled, handleAddContactFulfilled)
//       .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
//       .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         handleError
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.fulfilled,
//           addContact.fulfilled,
//           deleteContact.fulfilled
//         ),
//         handleFulfilled
//       ),
// });

// export const contactsReducer = contactsSlice.reducer;

