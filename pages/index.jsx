import Link from "next/link"
import Layout from "../components/layout.jsx";
import { useState,useEffect } from "react";
function Home() {
  const [easyMode, setEasyMode] = useState(false)
  function saveMode(){
    localStorage.setItem("easyModeChoice", JSON.stringify(easyMode));
  }
    return (
    <>
      <Layout>
      <Link href="/game"><button className="playBtn" onClick={saveMode} >PLAY</button></Link>
      <div className="easyModeBox">
              <h2 className="easyModeText">EASY MODE</h2>
              <label className="switch">
            <input type="checkbox" onClick={(event) => setEasyMode(event.target.value)}/>
            <span className="slider round">
            </span>
          </label>
      </div>
      </Layout>
    </>)

  }

  export default Home
