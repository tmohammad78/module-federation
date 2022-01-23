// import { mount } from "checkout/Checkout";
import React, { useRef, useEffect } from "react";

const Checkout = () => {
  const ref = useRef(null);

  // useEffect(() => {
  //   mount(ref.current);
  //   const { onParentNavigate } = mount(ref.current);
  //   console.log(onParentNavigate);
  //   // history.listen(onParentNavigate);
  // }, []);

  return <div>This is</div>;
};

export default Checkout;
