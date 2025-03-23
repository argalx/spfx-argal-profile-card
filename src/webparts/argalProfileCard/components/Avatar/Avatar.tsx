import * as React from "react";

import styles from "./Avatar.module.scss";

export default class Avatar extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <img
          className={styles.avatar}
          src="https://media-hosting.imagekit.io//6ab362d3aac14789/my-profile.jpg?Expires=1837324968&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EQrGoVl5k7h~Z3IJ1~zgNT4tUbFAgV3abBGfaD0SvpQG5j0cdprjXTBuSTnw6ujX94rquIf6KsTBRfQGG8LtIyNb09q4dgeWcUF-4YMxDQjgXqEiqJE-M-gRbc2RH03P1EgmiAyC9C-CQdjaA1f3FcPHpWUfkRtLQFjtkPVIC-1930Ld3f7Pi-5oCHAc2~aK7Vj4doN7g92JzEXYn5hkC3dIQWjbFlz5~uNaq1aHgtsAY~Uyjkl6b2d7FkpJDStytJZSD7Di2DayTXtp92MwvQpw~cb3GSAfm-BmzSfOI-GcrWGmjGwlGs1jbnJEdEn~jRfzaSpzi6fba~GE-sXong__"
          alt="My Profile"
        />
      </div>
    );
  }
}
