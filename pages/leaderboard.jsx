import React from "react";
import Layout from "../components/layout";
import HomeBtn from "../components/HomeBtn";

const leaderboard = () => {
  const leaderboardStats = [{ name: "Vanja", score: 100 },{ name: "Theo", score: 76 },{ name: "Jon", score: 56 }];
  return (
    <>
      <Layout>
        <HomeBtn></HomeBtn>
        {leaderboardStats !== null && (
          <table>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
            {leaderboardStats.map((item) => (
              <React.Fragment key={item.name}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                </tr>
              </React.Fragment>
            ))}
          </table>
        )}
      </Layout>
    </>
  );
};

export default leaderboard;
