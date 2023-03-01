import { createContext, useContext } from 'react'

export interface UserContext {
  isAuthenticated: boolean
}

const userContext = createContext<UserContext | null>(null)

export const UserContextProvider = userContext.Provider

export const useUserContext = () => {
  return useContext(userContext)
}
