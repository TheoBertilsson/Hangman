import Link from "next/link";
import Layout from "../components/layout.jsx";
import { useState } from "react";
function Home() {
  const [easyMode, setEasyMode] = useState(false);
  function saveMode() {
    localStorage.setItem("easyModeChoice", JSON.stringify(easyMode));
  }
  return (
    <>
      <Layout>
        <div className="btns">
          <Link href="/game" onClick={saveMode} className="playBtn">
            PLAY
          </Link>
          <Link href="/leaderboard" className="leaderBoardBtn">
            Leaderboard
          </Link>
        </div>
        <div className="easyModeBox">
          <h2 className="easyModeText">EASY MODE</h2>
          <label className="switch">
            <input
              type="checkbox"
              onClick={(event) => setEasyMode(event.target.value)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </Layout>
    </>
  );
}

export default Home;
