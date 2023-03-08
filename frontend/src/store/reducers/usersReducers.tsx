import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UsersState {
    name: null | string
    access: null | string
  }
  
  const initialUsersState: UsersState = {
    name: null,
    access: null
  }
  
  export const usersReducer = createSlice({
    name: 'user',
    initialState: initialUsersState,
    reducers: {
      setName: (state, action: PayloadAction<string>) => {
        state.name = action.payload
      },
      setAccess: (state, action: PayloadAction<string>) => {
        state.access = action.payload
      },
      logout: (state) => {
        state.name = null
        state.access = null
      }
    },
  })
  
  export const { setName, setAccess, logout } = usersReducer.actions
  
  export default usersReducer