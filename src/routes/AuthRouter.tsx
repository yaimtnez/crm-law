import { Routes, Route, Navigate } from "react-router"

import AuthLayout from "@/features/auth/layouts/AuthLayout"
import LoginPage from "@/features/auth/pages/LoginPage"

import { NotFoundPage } from "@/pages/NotFoundPage"

export const AuthRouter = () => (
    <Routes>
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" replace />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
)

