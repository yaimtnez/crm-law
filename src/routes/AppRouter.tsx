import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import AuthLayout from "@/features/auth/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { LoadingPage } from "@/pages/LoadingPage";

const DashboardRouter = lazy(() => import("@/routes/DashboardRouter").then(module => ({ default: module.DashboardRouter })));

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<Navigate to="/login" />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            <Route
                path="/*"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <DashboardRouter />
                    </Suspense>
                }
            />

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
