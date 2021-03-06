import styled from "styled-components";

const stc = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border: 1px solid #ddd;
  padding: 0;
  height: 0;
  margin-top: 3rem;
  margin-bottom: 4rem;
  &:focus {
    border-color: #ccc;
    outline: none !important;
  }
  &::-moz-range-track {
    background: none;
    border: 0;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    //border: 1px solid #ddd;
    height: 1.5rem;
    width: 1.5rem;
    background: #fff;
    background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    border-radius: 100%;
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15),
      0 0 0 1px rgba(34, 36, 38, 0.15) inset;
  }

  &::-moz-range-thumb {
    //border: 1px solid #ddd;
    height: 1.5rem;
    width: 1.5rem;
    background: #fff;
    background: #fff linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    background: #fff -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
    border-radius: 100%;
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15),
      0 0 0 1px rgba(34, 36, 38, 0.15) inset;
  }
`;

export default stc;
