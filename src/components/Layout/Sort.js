import React, { useEffect, useState , Fragment } from "react";
import AsideFilter from "../Layout/AsideFilter";
import ProductItem from "../Products/ProductItem";

import styled from "styled-components";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px 20px;
  width: 100%;

  @media (min-width: 1100px) and (max-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 735px) and (max-width: 1099px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 734px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-items: center;
  }
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 2%;
  font-size: 1.4rem;
`;
const Label = styled.label`
  margin-right: 20px;
`;
const Select = styled.select`
  font-size: 1.4rem;
`;
const Option = styled.option``;

const Sort = ({ currentProducts }) => {
  const [sortedProducts, setSortedProducts] = useState();
  const [sortType, setSortType] = useState();

  const changeHandler = (event) => {
    setSortType(event.target.value);
  };

  useEffect(() => {
    if (sortType === "price") {
      let copiedArr = [...currentProducts];
      copiedArr.sort((a, b) => a.price - b.price);
      setSortedProducts(copiedArr);
    } else if (sortType === "Alphabetically") {
      let copiedArr = [...currentProducts];
      copiedArr.sort((a, b) => a.name.localeCompare(b.name));
      setSortedProducts(copiedArr);
    }
  }, [currentProducts, sortType]);

  return (
    <Fragment>
      <SortContainer>
        <Label htmlFor="products"> Sort By</Label>
        <Select
          name="sorting"
          id="products"
          defaultValue="choose"
          onChange={changeHandler}
        >
          <Option value="choose" disabled>
            Choose
          </Option>
          <Option value="price"> Price </Option>
          <Option value="Alphabetically"> Alphabetically </Option>
        </Select>
      </SortContainer>
      <Wrapper>
        {console.log(sortedProducts)}
        <AsideFilter />
        {sortedProducts &&
          sortedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </Wrapper>
    </Fragment>
  );
};

export default Sort;
