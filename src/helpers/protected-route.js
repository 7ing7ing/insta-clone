import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children}) {
    if (!user) {
        return (
            <Navigate
                to={{
                    pathname: ROUTES.LOGIN,
                }}>

            </Navigate>
        )
    }

    return React.cloneElement(children, {user});
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
}