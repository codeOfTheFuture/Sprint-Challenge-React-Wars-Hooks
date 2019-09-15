import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Pages = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 2rem 0;
`;

const Page = styled.div`
  padding: 1rem;
  margin: 0 2rem;
  cursor: pointer;
  color: #000;
  border-radius: 10px;
`;

function Pagination(props) {
  const { pages, currentPage } = props;

  const [pagesDisplayed, setPagesDisplayed] = useState([]);

  console.log('page array', pages);

  useEffect(() => {
    const a = [...pages].splice(0, 3);
    setPagesDisplayed(a);
  }, [pages]);

  const newPages = page => {
    if (Number(page) === 2) {
      const a = [...pages].splice(0, 3);
      setPagesDisplayed(a);
    } else {
      const a = [...pages].splice(Number(page) - 2, 3);
      Number(page) > 2 && setPagesDisplayed(a);
    }
  };

  const fetchPage = page => {
    props.fetchPage(page);
    newPages(page);
  };

  return (
    <Pages>
      {pagesDisplayed.map((page, index) => {
        return page === currentPage ? (
          <Page
            key={index}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '3rem',
            }}
            onClick={() => fetchPage(page)}>
            {page}
          </Page>
        ) : (
          <Page key={index} onClick={() => fetchPage(page)}>
            {page}
          </Page>
        );
      })}
    </Pages>
  );
}

export default Pagination;
