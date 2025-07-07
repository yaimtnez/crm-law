import { Navigate, Route, Routes } from "react-router";

import DashboardLayout from "@/features/dashboard/layouts/DasboardLayout";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { EmailPage } from "@/features/email/pages/EmailPage";
import { ScheludePage } from "@/features/schedules/pages/ScheludePage";
import { TaskPage } from "@/features/task/pages/TaskPage";

export const DashboardRouter = () => (
    <Routes>
        <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="schedules" element={<ScheludePage />} />
            <Route path="email" element={<EmailPage />} />
            <Route path="task" element={<TaskPage />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
    </Routes>
);

