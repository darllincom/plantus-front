import { useContext } from 'react'
import { LoginContext } from '../../context/auth-provider'
import SignIn from '../../templates/signin'
import Welcome from '../../templates/welcome'

export default function Main() {
  const { authenticate } = useContext(LoginContext)

  return (
    <>
      { authenticate ? (
        <Welcome />
      ) : (
        <SignIn />
      ) }
    </>
  )
}