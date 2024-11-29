import { useState } from "react";
import UseData from "./hooks/use-data";

const ProductCard = ({ title, imgUrl, price }) => {
  return (
    <div className="prod-card">
      <img src={imgUrl} alt={title} srcset="" />
      <div className="prod-desc">
        <div>{title.slice(0, 10)}...</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default function Main({data,isLoading,setOffset,pages}) {
  console.log("data",data);
  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <div className="prod-cont">
          {data?.map((item) => (
            <ProductCard
              title={item?.title}
              imgUrl={item?.images[0]}
              price={item?.price}
            />
          ))}
        </div>
      )}
      <div className="pagination">
        <button>prev</button>
        {[...Array(pages)].map((_, index) => {
          return (
            <button onClick={() => setOffset(index * 30)}>{index + 1}</button>
          );
        })}
        <button>next</button>
      </div>
    </>
  );
}
