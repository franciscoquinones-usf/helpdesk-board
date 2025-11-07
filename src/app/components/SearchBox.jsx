// search box for titles

'use client'

import React from 'react';
export default function Searchbox({value, onChange}) {
    return ( 
        <label>
            <span>Search</span>
            <input type="text" placeholder="Search title or description" value={value} onChange={(e) => onChange(e.target.value)}/>
        </label>
    );
}