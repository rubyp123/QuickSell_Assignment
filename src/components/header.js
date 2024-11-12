import React from 'react';
import './style/header.css';
import Dropdown from './dropdown';

function Header({ grouping, setGrouping, ordering, setOrdering }) {
    return (
        <header>
            <Dropdown
                grouping={grouping}
                setGrouping={setGrouping}
                ordering={ordering}
                setOrdering={setOrdering}
            />
        </header>
    );
}

export default Header;
