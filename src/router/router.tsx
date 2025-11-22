import {createBrowserRouter} from "react-router-dom"
import LecturerLayout from "../layouts/LecturerLayout/LecturerLayout.tsx";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.tsx";
import CreateExamPage from "../pages/LecturerPages/CreateExamPage/CreateExamPage.tsx";
import ReviewExamsPage from "../pages/LecturerPages/ReviewExamsPage/ReviewExamsPage.tsx";
import ManageSessionsPage from "../pages/LecturerPages/ManageSessionsPage/ManageSessionsPage.tsx";
import ManageUsersPage from "../pages/AdminPages/ManageUsersPage/ManageUsersPage.tsx";
import ManageExamsPage from "../pages/AdminPages/ManageExamsPage/ManageExamsPage.tsx";
import ViewSystemLogs from "../pages/AdminPages/ViewSystemLogs/ViewSystemLogs.tsx";
import MonitoringPage from "../pages/AdminPages/MonitoringPage/MonitoringPage.tsx";
import SecurityAlertsPage from "../pages/AdminPages/SecurityAlertsPage/SecurityAlertsPage.tsx";
import AuditReportsPage from "../pages/AdminPages/AuditReportsPage/AuditReportsPage.tsx";
import UsageAnalyticsPage from "../pages/AdminPages/UsageAnalyticsPage/UsageAnalyticsPage.tsx";
import StudentPage from "../pages/StudentPage/StudentPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import App from "../App.tsx";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage.tsx";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "/auth/login",
                element: <LoginPage/>
            },

            {
                path: "student-portal",
                element: (
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentPage/>
                    </ProtectedRoute>
                ),
            },
            {
                path: "lecturer-dashboard",
                element: (
                    <ProtectedRoute allowedRoles={["lecturer"]}>
                        <LecturerLayout/>
                    </ProtectedRoute>
                ),
                children: [
                    {path: "create-exam", element: <CreateExamPage/>},
                    {path: "review-exams", element: <ReviewExamsPage/>},
                    {path: "manage-sessions", element: <ManageSessionsPage/>},
                ]
            },
            {
                path: "admin-panel",
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminLayout/>
                    </ProtectedRoute>
                ),
                children: [
                    {path: "manage-users", element: <ManageUsersPage/>},
                    {path: "manage-exams", element: <ManageExamsPage/>},
                    {path: "view-systemLogs", element: <ViewSystemLogs/>},
                    {path: "monitoring", element: <MonitoringPage/>},
                    {path: "security-alerts", element: <SecurityAlertsPage/>},
                    {path: "audit-reports", element: <AuditReportsPage/>},
                    {path: "usage-analytics", element: <UsageAnalyticsPage/>},
                ]
            }

        ]
    }
])

export default router;