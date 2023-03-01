import { useState, useEffect } from 'react'


const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

const loadIsUserAuthenticated = async (): Promise<UserDataLoaded> => {
  await wait(3000)
  // imagine that some network logic, local storage, sso, multisession and etc is involved here
  return { isAuthenticated: true }
}

export interface UserDataLoaded {
  isAuthenticated: boolean
}

export type UserData = UserDataLoaded | null


export const useUserData = () => {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState<UserData>(null)

  useEffect(() => {
    let shouldCancel = false

    loadIsUserAuthenticated().then(value => {
      if (shouldCancel) {
        return
      }

      setIsUserAuthenticated(value)
    })

    return () => {
      shouldCancel = true
    }
  })

  return isUserAuthenticated
}

