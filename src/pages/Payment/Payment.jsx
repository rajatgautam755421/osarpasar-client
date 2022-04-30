import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import axios from "axios";
import { toast } from "react-hot-toast";
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const email = userInfo ? userInfo.email : null;
const name = userInfo ? userInfo.name : null;
console.log(email, name);

let config = {
  publicKey: "test_public_key_217cd8ec1209455bbc10c8a7c1c7813e",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://localhost:3001",
  eventHandler: {
    onSuccess(payload) {
      console.log(payload);
      axios
        .post("http://localhost:4000/api/v1/payment/verify/", payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      const { amount, idx, mobile, product_name, product_url } = payload;
      const { data } = axios.post("http://localhost:4000/api/v1/payment", {
        amount,
        idx,
        mobile,
        product_name,
        product_url,
        email,
        name,
      });
      console.log(data);
      toast.success("Payment Successfull");
    },
    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

let checkout = new KhaltiCheckout(config);

const Payment = ({ totalPrice, id, setRefresh, refresh }) => {
  console.log(id);
  console.log(totalPrice);
  const handleClick = async (e) => {
    e.preventDefault();
    checkout.show({ amount: parseInt((parseInt(totalPrice) * 100) / 2) });
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/shipment/update/paid/${id}`
    );
    try {
      console.log(data);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className="title"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        {/* button */}
        <button
          onClick={handleClick}
          style={{
            width: "100px",
            height: "40px",
            color: "white",
            backgroundColor: "#4D2A7A",
            borderRadius: "10px",
            fontSize: "16px",
            margin: "0px auto",
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Payment;
