import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitial, TodoType } from '../../types/Todotypes'

const initialState :TodoInitial = {
    todo:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
      todoAdded: (state : TodoInitial, action: PayloadAction<TodoType>) => {
        state.todo=[...state.todo,action.payload ] 
    }
  },
})

export const { todoAdded} = todoSlice.actions

export default todoSlice.reducer