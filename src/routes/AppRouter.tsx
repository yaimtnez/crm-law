import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { LoadingPage } from "@/pages/LoadingPage";

const DashboardRouter = lazy(() => import("@/routes/DashboardRouter").then(module => ({ default: module.DashboardRouter })));
const AuthRouter = lazy(() => import("@/routes/AuthRouter").then(module => ({ default: module.AuthRouter })));

export const AppRouter = () => (
    <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/account/*" element={<AuthRouter />} />
                <Route path="/*" element={<DashboardRouter />} />

                <Route path="*" element={<Navigate to="/account/login" replace />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);
