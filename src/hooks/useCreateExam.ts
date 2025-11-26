import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createExam} from "../api/exams.api.ts";

export function useCreateExam(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createExam,
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: ['exams'] });
        }
    })
}