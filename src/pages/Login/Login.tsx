import { Helmet } from 'react-helmet-async'

function Login() {
  return (
    <>
        <Helmet>
            <title>Login — Mohammadmehdi Dalvandi</title>
            <meta name='description' content='noindex,nofollow"'/>
        </Helmet>
        <div className="min-h-screen pt-24 pb-32 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="flex items-center gap-3 text-primary font-mono text-lg mb-6">
                    <span className='animate-pulse'>●</span>
                    <span className="uppercase tracking-[0.3em]">Secure_Shell / Auth</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login