import {useMutation, useQueryClient} from "@tanstack/react-query";
import {gradeExam} from "../api/exams.api.ts";

interface IGrade {
    examId: number;
    studentId: number;
    grade: number;
    comment?: string;
}

export function useGradeExam (){
    const queryClient = useQueryClient();

    return useMutation({
        // Это те данные, которые ты будешь передавать внутрь мутации, когда вызовешь её на компоненте:
        mutationFn: ({ examId, studentId, grade, comment}: IGrade) =>
            gradeExam(examId, { studentId, grade, comment }),
        onSuccess: () => {
            // обновляем данные в случае их изменения
            void queryClient.invalidateQueries({ queryKey: ["exams"]})
        }

    })
}