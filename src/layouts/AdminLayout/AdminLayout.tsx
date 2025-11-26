import {Outlet} from "react-router-dom";
import styles from "./AdminLayout.module.css"
import {useGetAllExams} from "../../hooks/useGetAllExams.ts";

export default function AdminLayout(){
    const {data: exams, isError, isLoading } = useGetAllExams()
    if(isLoading) return <>Loading...</>
    if(isError) return <>Error</>
    return(
        <div className={styles.content}>
            <Outlet/>
            <div>
                admin layout
                {exams?.map((e) => (
                    <div key={e.id}>
                        {e.title};
                    </div>
                ))}
            </div>
        </div>
    );
}