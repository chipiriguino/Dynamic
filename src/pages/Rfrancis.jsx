import React from "react";

export default function Rfrancis() {
  return (
    <div className="body-card">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700"
      />

      <div class="wrapper">
        <div class="fut-player-card">
          <div class="player-card-top">
            <div class="player-master-info">
              <div class="player-rating">
                <span>99</span>
              </div>
              <div class="player-position">
                <span>FISIO</span>
              </div>
              <div class="player-nation">
                <img
                  src="/images/españa.png"
                  alt="Argentina"
                  draggable="false"
                />
              </div>
              <div class="player-club">
                <img
                  src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg"
                  alt="Barcelona"
                  draggable="false"
                />
              </div>
            </div>
            <div class="player-picture">
              <img
                src="/images/fran.png"
                alt="Messi"
                draggable="false"
              />
              <div class="player-extra">
                <span>4*SM</span>
                <span>4*WF</span>
              </div>
            </div>
          </div>

          <div class="player-card-bottom">
            <div class="player-info">
              <div class="player-name">
                <span>FRANCIS</span>
              </div>

              <div class="player-features">
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">99</div>
                    <div class="player-feature-title">Puncion</div>
                  </span>
                  <span>
                    <div class="player-feature-value">99</div>
                    <div class="player-feature-title">Osteopt</div>
                  </span>
                  <span>
                    <div class="player-feature-value">97</div>
                    <div class="player-feature-title">Rehabil</div>
                  </span>
                </div>
                <div class="player-features-col">
                  <span>
                    <div class="player-feature-value">99</div>
                    <div class="player-feature-title">Manos</div>
                  </span>
                  <span>
                    <div class="player-feature-value">75</div>
                    <div class="player-feature-title">Sexy</div>
                  </span>
                  <span>
                    <div class="player-feature-value">98</div>
                    <div class="player-feature-title">Electro</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
