import Hero from '@components/templates/index/Hero/Hero'
import ProjectHome from '@components/templates/index/ProjectHome/ProjectHome'
import { Helmet } from 'react-helmet-async'

function index() {
  return (
    <>
        <Helmet>
            <title>Mohammadmehdi Dalvandi — Full Stack Engineer</title>
            <meta name='description' content='Full stack engineer building high-performance digital architectures. Selected projects, credentials, and contact.'/>
        </Helmet>
        <div className='px-6 max-w-screen-2xl mx-auto my-16'>
          {/* Hero */}
            <Hero/>
            <ProjectHome/>
        </div>
    </>
  )
}

export default index