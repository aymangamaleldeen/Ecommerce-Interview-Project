import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import data from "../../data";
import styled from "styled-components";
import AsideFilter from "../Layout/AsideFilter";
import Pagination from "./Pagination";

const Container = styled.ul`
  /* display:flex;
flex-wrap:wrap;
justify-content: space-between;
align-content:space-between; */

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px 20px;

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
  }
`;

const Products = () => {
  const { products } = data;
  const [productsItems, setProductsItems] = useState(products);

  useEffect(() => {
    setProductsItems(products);
  }, [products]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productsItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <AsideFilter />
      {currentProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalProducts={productsItems.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default Products;
