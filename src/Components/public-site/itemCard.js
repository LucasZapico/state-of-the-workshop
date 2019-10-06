import React from 'react';

const ItemCard = ({item}) => {
  return (
    <div key={item.id} className="item">
    <div className="item-header color-grey-m">
      <h5>{item.title}</h5>
      <span>{item.lastUpdate}</span>
    </div>
    <div className="item-content">{item.description}</div>
    {item.tags.map((t, i) => {
      return (
        <div key={i} className="tag">
          {t}
        </div>
      );
    })}
  </div>
  )
}

export default ItemCard;