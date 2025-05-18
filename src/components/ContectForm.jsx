import React from "react";
import { assets } from "../assets/assets";

const ContectForm = () => {
  return (
    <section id="form-detail">
      <form>
        <span>Connect with Haval</span>
        <h2>We’re here to assist you every step of the way!</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          placeholder="Message..."
          cols="20"
          style={{ height: "120px" }}
        ></textarea>
        <button type="submit" class="normal">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContectForm;
