import "./styles.css";
import React, { useState } from "react";
import MiniFigma from "./React_exercises/MiniFigma";
import CharacterCount from "./React_exercises/CharacterCount";
import SimpleCounter from "./React_exercises/SimpleCounter";
import PasswordMatch from "./React_exercises/PasswordMatch";
import ShowPassword from "./React_exercises/ShowPassword";
import AlphanumericPassword from "./React_exercises/AlphanumericPassword";
import SwitchTabs from "./React_exercises/SwitchTabs";
import DisableButton from "./React_exercises/DisableButton";
import ToastButton from "./React_exercises/ToastButton";
import LikeButton from "./React_exercises/LikeButton";
import Todo from "./React_exercises/Todo";
import { useCart } from "./CartContext";
const products = [
  {
    name: "PS5",
    price: "₹49,990",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kj7gwi80/gamingconsole/t/v/v/cfi-1008a01r-825-sony-no-original-imafytxe7twjskbx.jpeg?q=70",
    id: 1,
    unit: 1
  },
  {
    name: "Acer Predator",
    price: "₹1,10,000",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k9loccw0/computer/4/f/w/acer-na-gaming-laptop-original-imafrcpya8phvptc.jpeg?q=70",
    id: 2,
    unit: 1
  }
];
export function ProductListing() {
  const { setItems } = useCart();
  return (
    <div>
      <h2>Products</h2>
      {products.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            padding: "1rem",
            textAlign: "center",
            maxWidth: "650px",
            margin: "1rem auto"
          }}
        >
          <div>
            <img src={item.image} alt="error" />
          </div>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => setItems((items) => [...items, item])}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
export function CartHeader() {
  const { items } = useCart();
  return <h2>Items in cart {items.length}</h2>;
}

export function Cart() {
  const { items, setItems } = useCart();
  return (
    <div style={{ height: "100vh" }}>
      <h2>Cart</h2>
      {items.map(({ id, name, image, price, unit }) => (
        <div
          key={id}
          style={{
            border: "1px solid black",
            padding: "1rem",
            textAlign: "center",
            maxWidth: "650px",
            margin: "1rem auto"
          }}
        >
          <div>
            <img src={image} alt="error" />
          </div>
          <h2>
            {name}({unit})
          </h2>
          <p>{price}</p>
          <button
            onClick={() =>
              setItems((items) => items.filter((item) => item.id !== id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default function App() {
  const [theme, setTheme] = useState(false);
  const [text, setText] = useState(false);
  const [route, setRoute] = useState("products");
  function colorHandler() {
    setTheme((theme) => !theme);
    setText((text) => !text);
  }

  return (
    <div className={theme ? "Black" : "App"}>
      <button className={theme ? "darkBtn" : "lightBtn"} onClick={colorHandler}>
        {text ? "Light Mode" : "Dark Mode"}
      </button>
      <SimpleCounter />
      <hr />
      <MiniFigma />
      <hr />
      <CharacterCount />
      <hr />
      <PasswordMatch />
      <hr />
      <ShowPassword />
      <hr />
      <AlphanumericPassword />
      <hr />
      <SwitchTabs />
      <hr />
      <DisableButton />
      <hr />
      <ToastButton />
      <hr />
      <Todo />
      <hr />
      <LikeButton />
      <hr />
      <div>
        <h1 style={{ padding: "1rem" }}>Add to Cart</h1>
        <CartHeader />
        <button
          style={{ margin: "1rem", padding: "0.3rem" }}
          onClick={() => setRoute("cart")}
        >
          Cart
        </button>

        <button
          style={{ margin: "1rem", padding: "0.3rem" }}
          onClick={() => setRoute("products")}
        >
          Products
        </button>
        {route === "cart" && <Cart />}
        {route === "products" && <ProductListing />}
      </div>
    </div>
  );
}
