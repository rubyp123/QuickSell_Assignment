import React, { useMemo } from 'react';
import Column from './Column';

function Grid({ gridData, grouping, userIdToData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div
            style={{
                minHeight: 'calc(100vh - 60px)',
                backgroundColor: '#f4f5f8',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '2rem',
                padding: '1rem 2rem',
                // Responsive style for smaller screens
                ...(window.innerWidth <= 700 && {
                    gridTemplateColumns: '1fr',
                }),
            }}
        >
            {keys.map((k) => (
                <Column
                    key={k}
                    tickets={gridData[k]}
                    grouping={grouping}
                    groupBy={k}
                    userIdToData={userIdToData}
                />
            ))}
        </div>
    );
}

export default Grid;
