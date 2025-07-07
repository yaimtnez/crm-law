import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import AuthLayout from "@/features/auth/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { LoadingPage } from "@/pages/LoadingPage";

const DashboardLayout = lazy(() => import('@/features/dashboard/layouts/DasboardLayout'));

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index path="login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Route>

            <Route
                path="/*"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <DashboardLayout />
                    </Suspense>
                }
            />

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
