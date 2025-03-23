import * as React from "react";

// Props
import { ISkillProps } from "./ISkillProps";

// Style
import styles from "./Skill.module.scss";

export default class Skill extends React.Component<ISkillProps> {
  public render(): JSX.Element {
    return (
      <div
        className={styles.skill}
        style={{ backgroundColor: this.props.bgColor }}
      >
        <span style={{ color: this.props.txtColor }}>{this.props.skill}</span>
        <span>{this.props.emoji}</span>
      </div>
    );
  }
}
