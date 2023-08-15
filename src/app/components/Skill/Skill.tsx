import React from "react";
import styles from "./Skill.module.css";
import Image from "next/image";

type Props = {
    skill: string
}

export function Skill(props: Props) {
    const { skill } = props;
  return (
    <div
      className={`flex h-max flex-row mx-4 items-end ${styles.container}`}
    >
        <Image
            src={skill[1]}
            alt={skill[0]}
            width={30}
            height={30}
            style={{
                marginRight: "2.5px"
            }}
        />
        <p
            className={`${styles.skill}`}
        >
            {skill[0]}
        </p>
    </div>
  );
}