import { Navigate } from "react-router";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const user = useSelector((state: RootState) => state.auth.user);
    if (!user) {
        return <Navigate to="/account/login" replace />;
    }
    return <>{children}</>;
}