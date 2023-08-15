import React from "react";
import { skills } from "./allSkills";
import styles from "./Skills.module.css";
import { Skill } from "@/app/components/Skill/Skill";

export function Skills() {
  return (
    <main
      className={`flex flex-wrap h-80 w-1/4 p-4 font-sans font-semibold ${styles.skillsContainer}`}
    >
        {
            renderSkills(skills)
        }
    </main>
  );
}

function renderSkills(skills: any) {
    return(
        <>
            {
                skills.map((skill: any, index: number) => <Skill key={index} skill={skill}/>)
            }
        </>        
    );
}