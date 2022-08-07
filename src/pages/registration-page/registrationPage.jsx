import React, {useCallback, useState} from 'react'
import style from "../../components/form/form.module.css";
import {Form} from "../../components/form/Form";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import {register} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";

export function RegistrationPage() {
    const [form, setValue] = useState({name: "", email: "", password: ""});
    const dispatch = useDispatch()
    const user = useSelector(store => store.authReducer.user)

    const onChange = e => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const handleButtonClick = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(
                register(form.email, form.password, form.name)
            )
        }, [dispatch, form]
    )

    if (user.name) {
        return (
            <Redirect to={"/"}/>
        )
    }

    return (
        <div className={style.formContainer}>
            <Form header={"Регистрация"} buttonText={"Зарегистрироваться"} handleClick={handleButtonClick}>
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    value={form.name}
                    name={"name"}
                    onChange={onChange}/>
                <EmailInput
                    value={form.email}
                    name={"email"}
                    onChange={onChange}/>
                <PasswordInput
                    value={form.password}
                    name={"password"}
                    onChange={onChange}/>
            </Form>
            <p className={`text text_type_main-default text_color_inactive mt-20 ${style.text}`}>Уже зарегистрированы?
                <Link
                    to="/login"
                    className={`text text_type_main-default ml-2 ${style.link}`}>Войти</Link></p>

        </div>
    )
}
