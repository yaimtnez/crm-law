import { Navigate } from "react-router";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function PublicRoute({ children }: { children: React.ReactNode }) {
    const user = useSelector((state: RootState) => state.auth.user);
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }
    return <>{children}</>;
}