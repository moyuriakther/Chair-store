import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";

const CartProduct = ({ item }) => {
  const { name, img } = item;
  console.log(item);
  return (
    <div className="d-flex justify-content-evenly">
      <img style={{ height: "50px" }} src={img} alt="" />
      <div> {name.length < 30 ? name : name.slice(0, 10)}</div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faTrashCanArrowUp} />
      </div>
    </div>
  );
};

export default CartProduct;
