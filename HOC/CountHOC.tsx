import { ComponentType, useState } from "react";

interface IProps {
  handleClickPlus?: any;
  handleClickMinus?: any;
  count?: any
}

const CountHOC = (CountComponent: ComponentType<IProps>) => {
  return () => {
    const [count, setCount] = useState<number>(0);

    const handleClickPlus = () => {
      setCount(() => count + 1);
    };

    const handleClickMinus = () => {
      setCount(() => count - 1);

      if (count <= 0) {
        setCount(0);
      }
    };
    return (
      <>
        <CountComponent
          handleClickMinus={handleClickMinus}
          handleClickPlus={handleClickPlus}
          count={count}
        />
      </>
    );
  };
};

export default CountHOC;
