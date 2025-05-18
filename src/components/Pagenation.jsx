import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Pagenation = () => {
  return (
    <section id="numbers">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">
        <i>
          {" "}
          <FaLongArrowAltRight />{"More"}
        </i>
      </a>
    </section>
  );
};

export default Pagenation;
