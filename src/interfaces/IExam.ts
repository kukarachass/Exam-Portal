interface IQuestion {
    id: number;
    text: string;
}

export interface IExam {
    id: number;
    title: string;
    subject: string;
    lecturerId: number;
    date: string;
    durationMinutes: number;
    questions: IQuestion[];
    grade: number;
}