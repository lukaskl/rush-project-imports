import { PropsWithChildren, useState, useEffect } from 'react'
import { UserContextProvider as UserContextProviderPlain, UserContext } from '@context/modules-common'

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

const loadIsUserAuthenticated = async (): Promise<UserContext> => {
  await wait(3000)
  // imagine that some network logic, local storage, sso, multisession and etc is involved here
  return { isAuthenticated: true }
}

export const UserContextProvider = ({ children }: PropsWithChildren) => {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState<UserContext | null>(null)

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

  return (
    <UserContextProviderPlain value={isUserAuthenticated} >
      {children}
    </UserContextProviderPlain>
  )
}

