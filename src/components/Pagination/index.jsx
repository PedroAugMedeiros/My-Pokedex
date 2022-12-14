import React, { useState } from 'react';
import './index.css'

const Pagination = (
  props) => {

  const [page, setPage] = useState(1)
  const lastPage = 58;

  const handleClick = (pageTarget, type) => {
    props.setIsLoading(true)
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
    <div
      data-testid='pagination'
      className="pagination fixed bottom-0 w-full flex flex-row  bg-black-pagination space-x-4 items-center justify-center">
      <button
        className='pagination-button rounded-md w-1/4  bg-swap-page-buttons p-4 text-4xl'
        onClick={
          () => handleClick(page - 1, 'prev')}
      >
        <a href="#header">
          <h1>{`<`}</h1>
        </a>
      </button>
      <div className='pagination-button m-0 show-page-button p-5 my-3 bg-slate-50 text-4xl rounded-md'
      >
        {`${page}/${lastPage.toFixed(0)}`}
      </div>
      <button
        className='pagination-button w-1/4 bg-swap-page-buttons p-4 text-4xl rounded-md'
        onClick={() => handleClick(page + 1, 'prox')}
      >
        <a href="#header">
          <h1>{`>`}</h1>
        </a>
      </button>
    </div>
  );
};

export default Pagination;
