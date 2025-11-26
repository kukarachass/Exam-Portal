import type {IExam} from "../interfaces/IExam.ts";
import axios from "axios";

interface IGradeResponse {
    message: string;
    studentId: number;
    grade: number;
    comment?: string;
}

export async function getAllExams(): Promise<IExam[]> {
    const res = await axios.get("exam/all-exams");
    return res.data;
}

export async function createExam(data: IExam){
    const res = await axios.post("/exams/create", data);
    return res.data;
}

export async function getExamById(id: number): Promise<IExam> {
    const res = await axios.get(`/exams/${id}`);
    return res.data;
}

export async function gradeExam(examId: number, data: { studentId: number; grade: number, comment?: string}): Promise<IGradeResponse> {
    const res = await axios.post(`/exams/${examId}/grade`, data);
    return res.data;
}