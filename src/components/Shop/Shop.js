import React, { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Row, Col } from "react-bootstrap";
import {
  addToDb,
  deleteShoppingCart,
  getProductFromLocalStorage,
  removeFromDb,
} from "../../utils/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // load products from local storage
  useEffect(() => {
    const localProducts = getProductFromLocalStorage();
    let savedCart = [];
    for (const id in localProducts) {
      const existProducts = products?.find((product) => product.id === id);
      if (existProducts) {
        const quantity = localProducts[id];
        existProducts.quantity = quantity;
        savedCart.push(existProducts);
      }
    }
    setCart(savedCart);
  }, [products]);

  // add product to cart
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    cart.length > 3
      ? alert("You Can not add more then 4 product")
      : setCart(newCart);
    addToDb(product.id);
  };
  //choose a random chair from 4 chair
  const chooseChair = () => {
    const choose = cart[Math.floor(Math.random() * cart?.length)];
    setCart([choose]);
  };
  //set empty cart
  const cartReset = () => {
    setCart([]);
    deleteShoppingCart();
  };
  //delete item from cart
  const handleRemoveItem = (id) => {
    const removedItem = cart.filter((pb) => pb.id !== id);
    setCart(removedItem);
    removeFromDb(id);
    console.log("remove", id, removedItem);
  };
  return (
    <div className="shop bg-light">
      <h1 className="shop-title text-center">Confused Buyer</h1>
      <h3 className="shop-subtitle text-center">Choose 4 Chairs</h3>
      <div className="shop-container mt-5">
        <Row className="product-container">
          <Col xs={8} md={8}>
            <Row>
              {products.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  handleAddProduct={handleAddProduct}
                />
              ))}
            </Row>
          </Col>
          <Col md={{ offset: 0.5 }}></Col>
          <Col xs={3} md={3}>
            <Row className="cart-container shadow-lg mt-4 p-3 pt-5 mb-5 bg-white rounded">
              <Cart
                cart={cart}
                chooseChair={chooseChair}
                cartReset={cartReset}
                handleRemoveItem={handleRemoveItem}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shop;
