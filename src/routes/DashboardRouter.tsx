import { Navigate, Route, Routes } from "react-router";

import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";

export const DashboardRouter = () => (
    <Routes>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
);