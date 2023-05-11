import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, isAdmin, children }) {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if(isAdmin && user.role !== 1) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;