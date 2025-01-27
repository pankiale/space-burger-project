import Modal from "../../components/modal/Modal";
import IngredientDetails from "../../components/ingredient-details/IngredientDetails";
import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

export function IngredientModalPage({handleClose}) {
    const history = useHistory()
    return (
        <Modal title="Детали ингредиента"
               handleClose={() => {
                   handleClose()
                   history.goBack()
               }}
        >
            <IngredientDetails/>
        </Modal>
    )
}

IngredientModalPage.propTypes = {
    handleClose: PropTypes.func.isRequired,
}
