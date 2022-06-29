import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import AllProjects from '../components/AllProjects'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>markporo|web developer</title>
        <meta name="description" content="Mark Porostosky's Web Development Portfolio" />
        {/* <link rel="icon" href="" /> */}
      
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}
