import styles from "./ExamSessions.module.css"
import {useGetAllExams} from "../../../hooks/useGetAllExams.ts";
import cn from "classnames";

export default function ExamSessions(){
    const { data: exams, isLoading, isError } = useGetAllExams();
    if (isLoading) return <>Loading...</>;
    if (isError) return <>Error</>;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Real-time Exams Sessions</h3>
                <span className={styles.lightGreen}>Live Monitoring</span>
            </div>

            <div className={styles.cardsWrapper}>
                { exams?.map((exam) => (
                    <div key={exam.id} className={styles.card}>
                        <div className={styles.info}>
                            <h4 className={styles.examName}>{exam.title}</h4>
                            <span className={styles.muted}>{ exam.lecturerName} | { exam.audience}</span>
                        </div>

                        <div className={cn(styles.examStatus, {
                            [styles.active] : exam.status === "active",
                            [styles.scheduled]: exam.status === "scheduled",
                            [styles.completed]: exam.status === "completed",
                        })}>
                            { exam.status }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}