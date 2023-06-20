import React from "react";
import "./achievements.css";

const Achievements = () => {
  return (
    <section id="achievements" className="achievements__top__section">
      <div className="container ach__container">
        <h1 className="text-light">&lt;achievements&gt;</h1>
        <div className="container cp_container">
          <h2>Codeforces</h2>
          <ul>
            <li>
              <a href="https://codeforces.com/profile/vidwansAD" target="blank">
                Rated<span className="highlight"> Expert (1655) </span>
              </a>
            </li>

            <li>
              <a
                href="https://codeforces.com/contest/1720/standings/participant/138588325#p138588325"
                target="blank"
              >
                Country Rank <span className="highlight">27</span> and Global
                Rank <span className="highlight">346</span> amongst{" "}
                <span className="highlight">20K+</span> participants (#815).
              </a>
            </li>
            <li>
              <a
                href="https://codeforces.com/contest/1822/standings/participant/154253877#p154253877"
                target="blank"
              >
                Country Rank <span className="highlight">11</span> and Global
                Rank <span className="highlight">269</span> amongst{" "}
                <span className="highlight">22K+</span> participants (#867).
              </a>
            </li>
          </ul>
        </div>
        <div className="container cp__container">
          <h2>Codechef</h2>
          <ul>
            <li>
              <a href="https://www.codechef.com/users/nnervvecc" target="blank">
                Rated
                <span className="highlight"> 4 star (1935) </span>in 3 contests.
              </a>
            </li>
            <li>
              <a
                href="https://www.codechef.com/rankings/START87C?itemsPerPage=100&order=asc&page=1&sortBy=rank"
                target="blank"
              >
                Global Rank <span className="highlight"> 14 </span> in
                Starters87 (Div. 3).
              </a>
            </li>
            <li>
              <a
                href="https://www.codechef.com/rankings/START85D?itemsPerPage=100&order=asc&page=1&sortBy=rank"
                target="blank"
              >
                Global Rank <span className="highlight"> 9 </span> in Starters85
                (Div. 4) amongst <span className="highlight"> 15K+ </span>{" "}
                participants.
              </a>
            </li>
          </ul>
        </div>
        <div className="container cp__container">
          {/*<h2>LeetCode</h2>
          <ul>
            <li>
              <a>Achievement 1</a>
            </li>
            <li>
              <a>Achievement 2</a>
            </li>
            <li>
              <a>Achievement 3</a>
            </li>
          </ul>*/}
        </div>
      </div>

      <div className="container interests__container">
        <h2>More interests</h2>
        <ul>
          <li>Psychology</li>
          <li>Physics</li>
          <li>Evolutionary Biology</li>
          <li>Philosophy</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
