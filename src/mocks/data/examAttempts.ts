export interface IExamAttempt {
    id: number;
    examId: number;
    studentId: number;
    answers: string[],
    grade: number | null;
    comment: string | null;
    status: string;
}

export const examAttempts: IExamAttempt[] = [
    {
        id: 1,
        examId: 1,
        studentId: 1,
        answers: [],
        grade: 85,
        comment: "well",
        status: "graded"
    }
];