import React from 'react'

const Pagination = ({ itemsPerPage ,totalProducts ,  paginate}) => {
    const pageNumbers=[];
    for (let i = 1; i <= Math.ceil(totalProducts / itemsPerPage);  i++) {
        pageNumbers.push(i)
    }
  return <nav>
      <ul>
          {pageNumbers.map(number => 
            <li key={number}>
                <a href='!#' onClick={()=>paginate(number)} > {number}</a>
            </li>)}
      </ul>
  </nav>;
};

export default Pagination