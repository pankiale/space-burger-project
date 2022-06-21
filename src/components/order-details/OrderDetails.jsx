import orderDetailsStyle from './OrderDetails.module.css'
import doneImage from '../../images/done.svg'
import {orderDetailsPropTypes} from "../../utils/propTypesTemplates";

const OrderDetails = (props) => {
    return (
        <div className={orderDetailsStyle.orderDetailsContainer}>
            <p className={`${orderDetailsStyle.orderNumber} ${'text text_type_digits-large mt-30'}`}>{props.props.order.number}</p>
            <p className={'text text_type_main-medium mt-8 mb-15'}>идентификатор заказа</p>
            <img className={orderDetailsStyle.image} src={doneImage} alt={'done'}/>
            <p className={'text text_type_main-default mt-15'}>Ваш заказ начали готовить</p>
            <p className={'text text_type_main-default text_color_inactive mt-2 mb-30'}>Дождитесь готовности на
                орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    orderDetailsPropTypes
}

export default OrderDetails;
