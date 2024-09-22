import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name: '', age: 0, email: '' }

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
      console.log('state.value', state.value);
    }
  }
})

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer