import SignIn from '@components/templates/Auth/SignIn/SignIn'
import { Helmet } from 'react-helmet-async'

function Login() {
  return (
    <>
        <Helmet>
            <title>Login — Mohammadmehdi Dalvandi</title>
            <meta name='description' content='noindex,nofollow"'/>
        </Helmet>
        <SignIn/>
    </>
  )
}

export default Login