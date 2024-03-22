import Link from "next/link"
import Layout from "../components/layout.jsx";
function Home() {
    return (
    <>
      <Layout>
      <Link href="/game"><button className="playBtn">PLAY</button></Link>
      </Layout>
    </>)

  }

  export default Home
