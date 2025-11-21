import { createBrowserRouter } from "react-router-dom"
import App from "../App.tsx";
import StudentLayout from "../layouts/StudentLayout/StudentLayout.tsx";
import LecturerLayout from "../layouts/LecturerLayout/LecturerLayout.tsx";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "student-portal/*",
                element: <StudentLayout/>,
            },
            {
                path: "lecturer-dashboard/*",
                element: <LecturerLayout/>,
                children: [
                    { path: "create-exam", element: <></>},
                    { path: "review-exams", element: <></>},
                    { path: "manage-sessions", element: <></>},
                ]
            },
            {
                path: "admin-panel/*",
                element: <AdminLayout/>,
                children: [
                    { path: "manage-users", element: <></> },
                    { path: "manage-exams", element: <></> },
                    { path: "view-systemLogs", element: <></> },
                    { path: "monitoring", element: <></> },
                    { path: "security-alerts", element: <></> },
                    { path: "audit-reports", element: <></> },
                    { path: "usage-analytics", element: <></> },
                ]
            }

        ]
    }
])

export default router;