export const handlePending = state => {
  state.isLoading = true;
};

export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(item => item.id === payload.id);
  state.items.splice(index, 1);
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
