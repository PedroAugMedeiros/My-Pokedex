import React, { useState } from 'react';
import './index.css';

const Pagination = (
  props) => {

  const [page, setPage] = useState(1)
  const lastPage = 58;
  console.log(lastPage)
  const handleClick = (pageTarget, type) => {
    console.log(pageTarget)
    if (pageTarget < 1 && type === 'prev') {
      props.setNumberPage(1)
      setPage(1)
      props.setStartPokemon(0)
      props.setLimit(props.limit)
      setPage(pageTarget)
    } else if (pageTarget > lastPage && type === 'prox') {
      props.setNumberPage(lastPage)
      setPage(lastPage)
    } else if (type === 'prev') {
      props.setStartPokemon(props.startPokemon - 20)
      props.setLimit(props.limit)
      setPage(pageTarget)
    } else if (type === 'prox') {
      props.setStartPokemon(props.startPokemon + 20)
      props.setLimit(props.limit)
      setPage(pageTarget)
    }

  }

  return (
    <div className="pagination">
      <button
        className='pagination-button'
        onClick={
          () => handleClick(page - 1, 'prev')}
      >
        <h1>{`<`}</h1>
      </button>
      <div className='pagination-button show-page-button'
      >
        {`${page}/${lastPage.toFixed(0)}`}
      </div>
      <button
        className='pagination-button'
        onClick={() => handleClick(page + 1, 'prox')}
      >
        <h1>{`>`}</h1>
      </button>
    </div>
  );
};

export default Pagination;
