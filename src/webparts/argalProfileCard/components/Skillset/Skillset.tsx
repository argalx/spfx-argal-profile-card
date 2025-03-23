import * as React from "react";

// Style
import styles from "./Skillset.module.scss";

// Component
import Skill from "./Skill/Skill";

export default class Skillset extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={styles.skillList}>
        <Skill skill="HTML+CSS" emoji="💪" bgColor="blue" txtColor="white" />
        <Skill
          skill="JavaScript"
          emoji="🤙"
          bgColor="yellow"
          txtColor="black"
        />
        <Skill skill="Python" emoji="🤙" bgColor="green" txtColor="white" />
        <Skill skill="React" emoji="🤙" bgColor="gray" txtColor="white" />
        <Skill
          skill="Git and GitHub"
          emoji="💪"
          bgColor="orange"
          txtColor="white"
        />
        <Skill
          skill="ARM Template/Bicep"
          emoji="💪"
          bgColor="pink"
          txtColor="black"
        />
        <Skill skill="Terraform" emoji="💪" bgColor="purple" txtColor="white" />
      </div>
    );
  }
}
