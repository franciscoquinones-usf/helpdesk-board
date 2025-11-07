// Select priority, all, low, medium, high, or critical

'use client'

import React from 'react';
export default function PriorityFilter({value, onChange}) {
return (
     <label>
            <span>Priority</span>
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
            </select>
        </label>
    );
}