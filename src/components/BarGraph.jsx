import { useEffect, useState } from "react";
import styled from "styled-components";

const BarGraph = () => {
  const [bars, setBars] = useState(Array(10).fill(0));

  useEffect(() => {
    setBars(bars.map(() => Math.ceil(Math.random() * 22)));
  }, []);

  return (
    <Wrapper>
      {bars.map((height, index) => {
        // console.log(height);
        return (
          <div
            key={index}
            className="bar"
            style={{ height: `${height}px` }}
          ></div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20px;
  padding: 10px;
  gap: 1px;
  margin-bottom: 1rem;

  .bar {
    width: 4px;
    background-color: #ed3e31;
  }
`;
export default BarGraph;
