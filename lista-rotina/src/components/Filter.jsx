import React from 'react'

const Filter = () => {
  return (
   <div className="filter">
    <h2>Filtrar:</h2>
    <div className="filter-options">
      <div>
        <p>Status:</p>
        <select>
          <option value='All'>Todos</option>
          <option value='Completed'>Completas</option>
           <option value='Incomplete'>Incompleta</option>
        </select>
      </div>
      <div>
        <p> Ordem Alfabética:</p>
        <button>Asc</button>
        <button>Desc</button>
      </div>
    </div>
   </div>
  )
}

export default Filter

