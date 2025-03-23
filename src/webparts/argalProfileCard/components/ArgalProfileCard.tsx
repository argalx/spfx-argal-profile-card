import * as React from "react";
import type { IArgalProfileCardProps } from "./IArgalProfileCardProps";

import Avatar from "./Avatar";

export default class ArgalProfileCard extends React.Component<IArgalProfileCardProps> {
  public render(): React.ReactElement<IArgalProfileCardProps> {
    return (
      <div>
        <Avatar />
      </div>
    );
  }
}
