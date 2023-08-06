//import { Progress } from "./components/Progress/progress";
import styles from "./Experience.module.css";

export function Current() {
  return (
    <span
        className={`inline-flex items-center rounded-md px-2 py-1 text-xl ring-1 ring-inset ring-gray-500/10 ${styles.current}`}
    >
        Current
    </span>
  );
}
