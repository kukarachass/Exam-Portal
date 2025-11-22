import {useAuthStore} from "../../store/authStore/authStore.ts";
import {Navigate} from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
    allowedRoles: string[];
    children: React.ReactNode;
}

export default function ProtectedRoute({ allowedRoles, children } : ProtectedRouteProps) {
    const user = useAuthStore((state) => state.user);
    const token = useAuthStore((state) => state.token);

    if(!token) return <Navigate to="/auth/login" replace/>;

    if(!user){
        return <>Loading...</>
    }
    if(!allowedRoles.includes(user?.role)){
        return <Navigate to="/auth/login" replace/>;
    }


    return (
        <div>
            {children}
        </div>
    )
}