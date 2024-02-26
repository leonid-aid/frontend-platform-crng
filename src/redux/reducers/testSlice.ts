import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
    name: 'test',
    initialState: {},
    reducers: {
        add() {},
    },
})

export const testSliceReducer = testSlice.reducer
export const { add } = testSlice.actions
