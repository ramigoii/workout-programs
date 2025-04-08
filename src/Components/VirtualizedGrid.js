import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import useVirtualization from '../hooks/useVirtualization';

const VirtualizedGrid = ({ 
  items, 
  renderItem, 
  initialColumnCount = 3, 
  rowHeight = 400,
  minColumnWidth = 300,
  gap = 30
}) => {
  const { columnCount, dimensions } = useVirtualization(initialColumnCount);
  const rowCount = Math.ceil(items.length / columnCount);

  return (
    <div style={{ height: 'calc(100vh - 300px)', minHeight: '600px', width: '100%' }}>
      <AutoSizer>
        {({ height, width }) => {
          // Calculate column width based on available width, column count, and gap
          const columnWidth = Math.max(minColumnWidth, (width / columnCount) - gap);
          
          return (
            <Grid
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={height}
              rowCount={rowCount}
              rowHeight={rowHeight}
              width={width}
              itemData={{
                items,
                columnCount,
                width,
                height
              }}
            >
              {renderItem}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedGrid;