import React, { useState } from "react";

const SingleProductGel = ({ product }) => {
  const [url, setUrl] = useState(product.image);
  return (
    <div class="single-pro-img">
      <img src={url} alt="T-Shirt img" width="100%" id="mainImg" />

      <div class="small-img-group">
        <div class="small-img-col">
          <img src={url} alt="T-Shirt img" width="100%" class="small-img" />
        </div>
        <div class="small-img-col">
          <img src={url} alt="T-Shirt img" width="100%" class="small-img" />
        </div>
        <div class="small-img-col">
          <img src={url} alt="T-Shirt img" width="100%" class="small-img" />
        </div>
        <div class="small-img-col">
          <img src={url} alt="T-Shirt img" width="100%" class="small-img" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductGel;
