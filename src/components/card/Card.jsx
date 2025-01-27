import React from 'react'
import style from './Card.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {cartPropTypes} from "../../utils/propTypesTemplates";
import {useDispatch, useSelector} from "react-redux";
import {SET_CURRENT_INGREDIENT} from "../../services/actions/burger-ingredients";
import {useDrag} from "react-dnd";
import {NavLink, useLocation} from "react-router-dom";

const Card = (props) => {
    const dispatch = useDispatch();
    const itemCount = useSelector(store => store.ingredientReducer.ingredients.filter(item => item._id === props._id)[0].ingredientCount)
    const location = useLocation();

    const setCardState = () => {
        dispatch({
            type: SET_CURRENT_INGREDIENT,
            item: props
        })
    }

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: {props}
    })

    return (
        <NavLink className={style.link} to={
            {
                pathname: `ingredients/${props._id}`,
                state: {background: location}
            }
        }>
            <div className={`${style.dragIco} ${'mt-6 mb-10'}`}
                 onClick={setCardState} ref={dragRef}>
                <Counter count={itemCount} size="small"/>
                <img src={props.image} alt={props.name}/>
                <p className={`${style.price} ${'text text_type_digits-default mt-1 mb-1'}`}>
                    {props.price}
                    <CurrencyIcon type="primary"/>
                </p>
                <p className={`${style.name} ${'text text_type_main-default'}`}>
                    {props.name}
                </p>
            </div>
        </NavLink>
    )
}

Card.propTypes = {
    props: cartPropTypes,
}

export default Card
