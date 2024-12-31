import React from "react";
import { NonDraggableImage } from "../utils/utils.component";
import { images } from "../../constants/images";
import "./avatar_section.styles.scss";

const AvatarSection = () => (
  <div className="avatar-section">
    <div className="avatar-section__pattern">
      <NonDraggableImage
        src={images.linePattern}
        alt="lines-pattern"
        classNames="avatar-section__pattern-lines"
      />
      <NonDraggableImage
        src={images.avatar}
        alt="avatar"
        classNames="avatar-section__pattern-avatar"
      />
    </div>
    <NonDraggableImage
      src={images.arrow}
      alt="arrow"
      classNames="avatar-section__arrow"
    />
  </div>
);

export default AvatarSection;
