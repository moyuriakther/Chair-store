import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCanArrowUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import CartProduct from "./CartProduct";

const Cart = ({ cart, chooseChair, cartReset, handleRemoveItem }) => {
  return (
    <div className="cart">
      <h4>Selected Chairs : {cart?.length}</h4>
      {cart?.length
        ? cart?.map((item) => (
            <CartProduct
              item={item}
              key={item.id}
              handleRemoveItem={handleRemoveItem}
            />
          ))
        : ""}
      <Button variant="info" className="my-2" onClick={chooseChair}>
        Choose 1 For Me <FontAwesomeIcon icon={faCircleCheck} />{" "}
      </Button>{" "}
      <Button variant="danger" onClick={cartReset}>
        Clear Cart <FontAwesomeIcon icon={faTrashCanArrowUp} />{" "}
      </Button>
    </div>
  );
};

export default Cart;
