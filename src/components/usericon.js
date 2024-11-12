import React, { useMemo } from 'react';

function UserIcon({ name, available }) {
    const text = useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                fontSize: '0.5rem',
                height: '1rem',
                width: '1rem',
                backgroundColor: '#2b963a',
                color: '#fff',
                borderRadius: '9999px',
                position: 'relative',
            }}
        >
            <div style={{ fontSize: 'inherit', color: 'inherit' }}>{text}</div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '-0.125rem',
                    right: '-0.125rem',
                    border: '1px solid #fff',
                    backgroundColor: available ? '#e8b602' : '#dfe1e4',
                    height: '0.25rem',
                    width: '0.25rem',
                    borderRadius: '9999px',
                }}
            ></div>
        </div>
    );
}

export default UserIcon;
