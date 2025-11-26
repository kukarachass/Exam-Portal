import {useQuery} from "@tanstack/react-query";
import {getAllExams} from "../api/exams.api.ts";

export function useGetAllExams() {
    return useQuery({
        queryKey: ['exams'],
        queryFn: getAllExams,
        retry: true,
    })
}