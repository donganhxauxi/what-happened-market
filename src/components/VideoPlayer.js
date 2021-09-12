import React from "react";
import Button from "./UI/Button";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = (props) => {
  return (
    <div className={styles["video-player"]}>
      <div className={styles.description}>
        <h1>HAPPENED ISSUE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>SEE MORE</Button>
      </div>
      <div className={styles.video}>
        <div className={styles.title}>
          <h2>WHAT HAPPENED</h2>
          <h2 class={styles["close-btn"]}>X</h2>
        </div>
        <div className={styles.link}>WWW.WHPN.COM/BRANDSTORY</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
