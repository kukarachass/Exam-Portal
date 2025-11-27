import {createBrowserRouter} from "react-router-dom"
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
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.tsx";
import AdminPage from "../pages/AdminPages/AdminPage/AdminPage.tsx";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import StudentLayout from "../layouts/StudentLayout/StudentLayout.tsx";
import LecturerLayout from "../layouts/LecturerLayout/LecturerLayout.tsx";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.tsx";
import LecturerPage from "../pages/LecturerPages/LecturerPage/LecturerPage.tsx";

const router = createBrowserRouter([
    // ---- MAIN LAYOUT ----
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
        ]
    },

    // ---- USER ----
    {
        path: "/student-portal",
        element: (
            <ProtectedRoute allowedRoles={["student"]}>
                <StudentLayout/>
            </ProtectedRoute>
        ),
        children: [
            { path: "", element: <StudentPage/>}
        ]
    },

    // ----LECTURER DASHBOARD----
    {
        path: "/lecturer-dashboard",
        element: (
            <ProtectedRoute allowedRoles={["lecturer"]}>
                <LecturerLayout/>
            </ProtectedRoute>
        ),
        children: [
            { path: "", element: <LecturerPage/>},
            { path: "create-exam", element: <CreateExamPage/> },
            { path: "review-exams", element: <ReviewExamsPage/>},
            { path: "manage-sessions", element: <ManageSessionsPage/>}
        ]
    },

    // ----ADMIN PANEL----
    {
        path: "/admin-panel",
        element: (
            <ProtectedRoute allowedRoles={["admin"]}>
                <AdminLayout/>
            </ProtectedRoute>
        ),
        children: [
            { path: "", element: <AdminPage/>},
            { path: "manage-users", element: <ManageUsersPage/> },
            { path: "manage-exams", element: <ManageExamsPage/> },
            { path: "view-systemLogs", element: <ViewSystemLogs/> },
            { path: "monitoring", element: <MonitoringPage/> },
            { path: "security-alerts", element: <SecurityAlertsPage/> },
            { path: "audit-reports", element: <AuditReportsPage/> },
            { path: "usage-analytics", element: <UsageAnalyticsPage/> },
        ]
    },
])

export default router;