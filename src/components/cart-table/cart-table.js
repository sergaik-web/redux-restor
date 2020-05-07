import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import { deletedItemCart } from "../../actions";

const CartTable = ({ cartItems, deletedItemCart }) => {
  const items = cartItems.map((item) => {
    const { title, id, price, url } = item;
    return (
      <div key={id} className="cart__item">
        <img src={url} className="cart__item-img" alt={title} />
        <div className="cart__item-title">{title}</div>
        <div className="cart__item-price">{price}$</div>
        <div onClick={() => deletedItemCart(id)} className="cart__close">
          &times;
        </div>
      </div>
    );
  });
  console.log(items);

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">{items}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.cartItems);
  return { cartItems: state.cartItems };
};

const mapDispatchToProps = {
  deletedItemCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
