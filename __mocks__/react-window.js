import React from 'react';
import PropTypes from 'prop-types';

const FixedSizeList = ({ children, itemData, itemCount }) => (
  <div data-testid="fixed-size-list">
    {Array.from({ length: Math.min(itemCount, 3) }).map((_, index) => (
      <div key={index} data-testid={`list-item-${index}`}>
        {children({ index, style: {}, data: itemData })}
      </div>
    ))}
  </div>
);

const FixedSizeGrid = ({ children, itemData, columnCount, rowCount }) => (
  <div data-testid="fixed-size-grid">
    {Array.from({ length: Math.min(columnCount * rowCount, 3) }).map((_, index) => {
      const rowIndex = Math.floor(index / columnCount);
      const columnIndex = index % columnCount;
      return (
        <div key={index} data-testid={`grid-item-${index}`}>
          {children({ columnIndex, rowIndex, style: {}, data: itemData })}
        </div>
      );
    })}
  </div>
);

// Adding prop validation
FixedSizeList.propTypes = {
  children: PropTypes.func.isRequired,
  itemData: PropTypes.array.isRequired,
  itemCount: PropTypes.number.isRequired
};

FixedSizeGrid.propTypes = {
  children: PropTypes.func.isRequired,
  itemData: PropTypes.array.isRequired,
  columnCount: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired
};

module.exports = {
  FixedSizeList,
  FixedSizeGrid
};
