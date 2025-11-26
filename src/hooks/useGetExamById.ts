import {useQuery} from "@tanstack/react-query";
import {getExamById} from "../api/exams.api.ts";

export function useGetExamById (id: number){
    return useQuery({
        queryKey: ['exam', id],
        queryFn: () => getExamById(id),
    })
}