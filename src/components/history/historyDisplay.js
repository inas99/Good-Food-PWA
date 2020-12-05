import React, { useState } from "react";
import { Link } from 'react-router-dom';


import ArrowRight from 'react-feather/dist/icons/arrow-right';
import Trash2 from 'react-feather/dist/icons/trash-2';
import HistoryHandler from './historyHandler';

import './historyDisplay.css';

const HistoryDisplay = () => {

  const [ products, setProducts ] = useState(HistoryHandler.getProducts());

  const deleteProduct = (id) => {
    setProducts(HistoryHandler.deleteProduct(id));
  }

  return (
    <div className="history__list">
      {products === null ?
        <div className="history__emptyState">
          <h2 className="history__emptyState__title">
           Here is the history of the products you have already scanned before, if it is empty Go Scan some! <span role="img" aria-label="carrot">🥕</span>
          </h2>
        <img src="/icons/scan.png" alt="Girl in a jacket" width="300" height="450"></img>       
        </div>
        :
        products.map((x) => {
        const { thumb, name } = JSON.parse(x.data);
        return (
        <div key={name} className="history__listItem">
          <div className="history__delete">
            <button type="button" className="history__deleteBtn" onClick={() => deleteProduct(x.code)}>
              <Trash2 size={20} />
            </button>
          </div>
          <Link className="history__linkWrapper" to={`/product/${x.code}`}>
          <div className="history__thumbWrapper">
            {thumb ?
              <img src={thumb} className="history__thumb" alt={`${name} thumb`}/>
              :
              <div className="skeleton__imageThumb">
                Picture not found
              </div>
            }
          </div>
          <div className="history__textWrapper">
            <h2 className="history__title">{name}</h2>
            <div className="history__barcode">{x.code}</div>
          </div>
            <ArrowRight className="history__arrowRight" size={20} />
          </Link>
        </div>)
      }
      )}
    </div>
  );
};

export default HistoryDisplay;
