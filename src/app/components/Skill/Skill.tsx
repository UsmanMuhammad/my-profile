import React from "react";
import styles from "./Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer  } from "@fortawesome/free-solid-svg-icons";

type Props = {
    skill: string
}

export function Skill(props: Props) {
    const { skill } = props;
  return (
    <div
      className={`flex h-max flex-col mx-4 items-end ${styles.container}`}
    >
        <p
            className={`${styles.skill}`}
        >
            {skill}
        </p>
    </div>
  );
}