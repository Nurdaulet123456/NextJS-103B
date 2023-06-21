import CountHOC from "@/HOC/CountHOC";

const ProductPage = ({handleClickPlus, handleClickMinus, count}: any) => {


  return (
    <>
      <div>
        <button onClick={handleClickPlus}>+</button>

        {count}
        <button onClick={handleClickMinus}>-</button>
      </div>
    </>
  );
};

export default CountHOC(ProductPage);
