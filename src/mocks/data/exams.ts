import type {IExam} from "../../interfaces/IExam.ts";

export const exams: IExam[] = [
    {
        id: 1,
        title: "Math Final Exam",
        subject: "Mathematics",
        lecturerId: 101,
        lecturerName: "Kristina Shvets",
        date: "2025-02-10",
        audience: "202B",
        durationMinutes: 60,
        status: "scheduled",
        questions: [
            { id: 1, text: "What is 2 + 2?"},
            { id: 2, text: "Solve 5 x 20"},
        ]
    }
]