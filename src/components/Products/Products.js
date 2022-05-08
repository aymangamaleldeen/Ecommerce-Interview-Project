import React, { useState, useEffect, useLayoutEffect } from "react";
import data from "../../data";
import styled from "styled-components";
import Sort from "../Layout/Sort";
import Pagination from "./Pagination";

const Container = styled.div`
  width: 100%;
`;


const Products = () => {
  const { products } = data;
  const [productsItems] = useState(products);

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
    // console.log(currentPage);
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
      <Sort currentProducts={currentProducts} />
   
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
