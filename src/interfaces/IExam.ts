interface IQuestion {
    id: number;
    text: string;
}

export interface IExam {
    id: number;
    title: string;
    subject: string;
    lecturerId: number;
    lecturerName: string;
    audience: string;
    status: "scheduled" | "completed" | "active";
    date: string;
    durationMinutes: number;
    questions: IQuestion[];
}