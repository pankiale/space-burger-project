import '../../pages/constructor-page/constructorPage.module.css';
import {CLOSE_INGREDIENT_MODAL, getIngredients} from "../../services/actions/burger-ingredients";
import {useDispatch} from "react-redux";
import {CLOSE_ORDER_MODAL} from "../../services/actions/burger-constructor-ingredients";
import {Route, Switch, useLocation} from "react-router-dom";
import {ConstructorPage} from "../../pages/constructor-page/constructorPage";
import {LoginPage} from "../../pages/login-page/loginPage";
import {RegistrationPage} from "../../pages/registration-page/registrationPage";
import {ForgotPasswordPage} from "../../pages/forgot-password-page/forgotPasswordPage";
import {ResetPasswordPage} from "../../pages/reset-password-page/resetPasswordPage";
import {ProfilePage} from "../../pages/profile-page/profilePage";
import {NotFoundPage} from "../../pages/not-found-page/notFoundPage";
import AppHeader from "../app-header/AppHeader";
import {ProtectedRoute} from "../protected-route";
import {IngredientModalPage} from "../../pages/ingredient-modal-page/ingredientModalPage";
import React, {useEffect} from "react";
import IngredientDetails from "../ingredient-details/IngredientDetails";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state?.background;

    const handleClose = () => {
        dispatch({
            type: CLOSE_INGREDIENT_MODAL
        });
        dispatch({
            type: CLOSE_ORDER_MODAL
        });
    }

    useEffect(() => {
        dispatch(
            getIngredients())
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <Switch location={background || location}>
                <Route path="/" exact>
                    <ConstructorPage handleClose={handleClose}/>
                </Route>
                <ProtectedRoute notForAuthorisedRoute={true} path={"/login"}>
                    <LoginPage/>
                </ProtectedRoute>
                <ProtectedRoute notForAuthorisedRoute={true} path={"/register"}>
                    <RegistrationPage/>
                </ProtectedRoute>
                <ProtectedRoute notForAuthorisedRoute={true} path={"/forgot-password"}>
                    <ForgotPasswordPage/>
                </ProtectedRoute>
                <ProtectedRoute notForAuthorisedRoute={true} path={"/reset-password"}>
                    <ResetPasswordPage/>
                </ProtectedRoute>
                <ProtectedRoute path={"/profile"}>
                    <ProfilePage/>
                </ProtectedRoute>
                <Route path={"/ingredients/:id"}>
                    <IngredientDetails/>
                </Route>
                <Route path="*">
                    <NotFoundPage/>
                </Route>
            </Switch>
            {background &&
                <Route path={"/ingredients/:id"}>
                    <IngredientModalPage handleClose={handleClose}/>
                </Route>}
        </>
    );
}

export default App;
