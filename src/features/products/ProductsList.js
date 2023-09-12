import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsSlice";

import Card from "../../components/Card";


const ProductsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  console.log("Users", loading, data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, page]);

  let content;

  if (loading === "pending") {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === "idle") {
    content = data.map((item) => {
      console.log("item",item);
      return <Card id={item.id} title={item.name} text={item.email} key={item.id}  />;
    });
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div onClick={() => dispatch(getProducts())}>refresh</div>
      <div onClick={() => setPage(page + 1)}>page</div>
      <div className="row">{content}</div>
    </div>
  );
}

export default ProductsList;
