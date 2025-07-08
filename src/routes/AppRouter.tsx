import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { LoadingPage } from "@/pages/LoadingPage";
import RequireAuth from "@/features/auth/components/PrivateRoute";
import PublicRoute from "@/features/auth/components/PublicRoute";

const DashboardRouter = lazy(() => import("@/routes/DashboardRouter").then(module => ({ default: module.DashboardRouter })));
const AuthRouter = lazy(() => import("@/routes/AuthRouter").then(module => ({ default: module.AuthRouter })));

export const AppRouter = () => (
    <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/account/*" element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <RequireAuth>
                        <DashboardRouter />
                    </RequireAuth>} />

                <Route path="*" element={<Navigate to="/account/login" replace />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);
