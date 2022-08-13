import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const CartProduct = ({ item, handleRemoveItem }) => {
  const { name, img, id } = item;
  console.log(item);
  return (
    <div className="d-flex justify-content-evenly">
      <img style={{ height: "50px" }} src={img} alt="" />
      <div> {name.length < 30 ? name : name.slice(0, 10)}</div>
      <div>
        {" "}
        {/* <FontAwesomeIcon
          onClick={() => handleRemoveItem(id)}
          icon={faTrashCanArrowUp}
        /> */}
        <Button variant="danger" onClick={() => handleRemoveItem(id)}>
          <FontAwesomeIcon icon={faTrashCanArrowUp} />{" "}
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
