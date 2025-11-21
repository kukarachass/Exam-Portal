import { createBrowserRouter } from "react-router-dom"
import App from "../App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "student-portal/*",
                element: <></>,
            },
            {
                path: "lecturer-dashboard/*",
                element: <></>,
                children: [
                    { path: "create-exam", element: <></>},
                    { path: "review-exams", element: <></>},
                    { path: "manage-sessions", element: <></>},
                ]
            },
            {
                path: "admin-panel/*",
                element: <></>,
                children: [
                    { path: "manage-users", element: <></> },
                    { path: "manage-exams", element: <></> },
                    { path: "view-systemLogs", element: <></> },
                    { path: "monitoring", element: <></> },
                    { path: "security-alerts", element: <></> },
                    { path: "audit-reports", element: <></> },
                    { path: "usage-analytics", element: <></> },
                    { path: "user-management", element: <></> },
                ]
            }

        ]
    }
])

export default router;