import { createContext, ReactNode, useEffect, useState } from "react";

type ContextType = {
  isEdition: boolean
  handleEdition: () => void
}

type ProfileProps = {
  children: ReactNode
}

const ProfileContext = createContext<Partial<ContextType>>({})

function ProfileProvider({ children }: ProfileProps) {
  const [ isEdition, setEdition ] = useState(false)

  function handleEdition() {
    setEdition(!isEdition)
  }

  useEffect(() => {}, [])

  return (
    <ProfileContext.Provider value={{ isEdition, handleEdition }}>
      { children }
    </ProfileContext.Provider>
  )
}

export { ProfileContext, ProfileProvider }