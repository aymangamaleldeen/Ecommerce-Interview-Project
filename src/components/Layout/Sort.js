import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
justify-content: flex-end;
  border: 1px solid blue;
  margin-right: 10%;
  margin-bottom: 2%;
  font-size: 1.4rem;

`;
const Label = styled.label`
margin-right:20px;
`;
const Select = styled.select`
  font-size: 1.4rem;
`;
const Option = styled.option`

`;



const Sort = () => {
  return (
    <Container>
      <Label for="products"> Sort By</Label>
      <Select name="sorting" id="products">
        <Option value="price"> Price </Option>
        <Option value="Alphabetically"> Alphabetically </Option>
      </Select>
    </Container>
  );
};

export default Sort;
