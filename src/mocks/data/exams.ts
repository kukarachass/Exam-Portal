import type {IExam} from "../../interfaces/IExam.ts";

export const exams: IExam[] =
    [
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
                {id: 1, text: "What is 2 + 2?"},
                {id: 2, text: "Solve 5 x 20"},
            ]
        },
        {
            id: 2,
            title: "Chemistry Final Exam",
            subject: "Chemistry",
            lecturerId: 102,
            lecturerName: "Matvii Shvets",
            date: "2025-02-10",
            audience: "80B",
            durationMinutes: 90,
            status: "active",
            questions: [
                {id: 1, text: "What is 2 + 2?"},
                {id: 2, text: "Solve 5 x 20"},
            ]
        },
        {
            id: 3,
            title: "History Final Exam",
            subject: "Mathematics",
            lecturerId: 121,
            lecturerName: "Maksim Shvets",
            date: "2025-02-10",
            audience: "32B",
            durationMinutes: 100,
            status: "completed",
            questions: [
                {id: 1, text: "What is 2 + 2?"},
                {id: 2, text: "Solve 5 x 20"},
            ]
        }
    ]