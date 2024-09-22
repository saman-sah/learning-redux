import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  form: {
    name: '',
    lastName: '',
    isActive: true,
    role: 'admin',
    password: null
  }
}

export const testSlice = createSlice({
  name: 'test',
  initialState: { value: initialStateValue },
  reducers: {
    submitForm: (state, action) => {
      state.value = action.payload
      console.log('state.value', state.value);
    }
  }
})

export const { submitForm } = testSlice.actions

export default testSlice.reducer