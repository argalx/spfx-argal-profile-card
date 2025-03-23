import * as React from "react";
import type { IArgalProfileCardProps } from "./IArgalProfileCardProps";

// Style;
import styles from "./ArgalProfileCard.module.scss";

// Components
import Avatar from "./Avatar/Avatar";
import Intro from "./Intro/Intro";
import Skillset from "./Skillset/Skillset";

export default class ArgalProfileCard extends React.Component<IArgalProfileCardProps> {
  public render(): React.ReactElement<IArgalProfileCardProps> {
    return (
      <div className={styles.card}>
        <Avatar />
        <div className={styles.data}>
          <Intro />
          <Skillset />
        </div>
      </div>
    );
  }
}
