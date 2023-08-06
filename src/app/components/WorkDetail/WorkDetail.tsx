import styles from "./WorkDetail.module.css";

interface Props {
    company: string
    start: string
    end: string
    role: string
    headline: string
    skills: string[]
}

export function WorkDetail(props: Props) {
    const {
        company,
        start,
        end,
        role,
        headline,
        skills
    } = props;

    return (
        <div className={`flex h-max rounded-xl flex-col p-24 mx-16 items-end ${styles.wrapper}`}>
            <h3>{company}</h3>
            <h2>{role}</h2>
        </div>
    );
}
