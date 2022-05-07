import React, { useState, useEffect, useLayoutEffect } from "react";
import ProductItem from "./ProductItem";
import data from "../../data";
import styled from "styled-components";
import AsideFilter from "../Layout/AsideFilter";
import Pagination from "./Pagination";

const Container = styled.div`
  width: 100%;
  border: 4px solid blue;
`;

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
    justify-content: center;
    align-items: center;
  }
`;

const Products = () => {
  const { products } = data;
  const [productsItems, setProductsItems] = useState(products);

  useEffect(() => {
    setProductsItems(products);
  }, [products]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const [size, setSize] = useState(0);

  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showForwardArrow, setShowForwardArrow] = useState(true);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (size < 735) {
      setProductsPerPage(4);
    } else if (size > 736) {
      setProductsPerPage(6);
    }
  }, [size]);

  useEffect(() => {
    if (currentPage === 1) {
      setShowPrevArrow(false);
        setShowForwardArrow(true);
    } else if (currentPage === 4 && size > 736) {
      setShowForwardArrow(false);
      setShowPrevArrow(true);
    } else if (currentPage === 6) {
      setShowForwardArrow(false);
      setShowPrevArrow(true);
    } else {
      setShowPrevArrow(true);
      setShowForwardArrow(true);
    }
    console.log(currentPage);
  }, [currentPage, size]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const prevHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const forwardHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Wrapper>
        <AsideFilter />
        {currentProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Wrapper>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
        prevArrow={showPrevArrow}
        ForwardArrow={showForwardArrow}
        onPrevious={prevHandler}
        onForward={forwardHandler}
      />
    </Container>
  );
};

export default Products;
