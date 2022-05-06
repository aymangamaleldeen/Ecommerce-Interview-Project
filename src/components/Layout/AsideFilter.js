import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  grid-row: 1/4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid blue; */
  @media (max-width: 1099px) {
    display: none;

  }
`;
const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin-bottom: 35px;
  /* border: 1px solid green; */
`;
const InputWrapper = styled.div`
  margin: 15px 0;
  font-size: 1.5rem;
  /* border: 1px solid red; ; */
`;

const Legend = styled.legend`
  font-weight: bold;
  font-size: 1.6rem;
`;
const Input = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 20px;
`;

const AsideFilter = () => {
  return (
    <Container>
      <FieldSet>
        <Legend> Materials </Legend>
        <InputWrapper>
          <Input name="material" id="wood" type="checkbox" />
          <label htmlFor="wood"> Wood </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="concrete" type="checkbox" />
          <label htmlFor="concrete"> Concrete </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="brick" type="checkbox" />
          <label htmlFor="brick"> Brick </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="glass" type="checkbox" />
          <label htmlFor="glass"> Glass </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="steel" type="checkbox" />
          <label htmlFor="steel"> Steel </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="carbon-fiber" type="checkbox" />
          <label htmlFor="carbon-fiber"> Carbon Fiber </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="copper" type="checkbox" />
          <label htmlFor="copper"> Copper </label>
        </InputWrapper>
      </FieldSet>

      <FieldSet>
        <Legend> Price Range </Legend>
        <InputWrapper>
          <Input name="material" id="wood" type="radio" />
          <label htmlFor="wood"> Lower than $20 </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="concrete" type="radio" />
          <label htmlFor="concrete"> $20 - $100 </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="brick" type="radio" />
          <label htmlFor="brick"> $100 - $200 </label>
        </InputWrapper>
        <InputWrapper>
          <Input name="material" id="glass" type="radio" />
          <label htmlFor="glass"> More than $200 </label>
        </InputWrapper>
      </FieldSet>
    </Container>
  );
};

export default AsideFilter;
