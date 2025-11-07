// Able to filter by status, all, open, in progress, on hold, resolved

'use client'

import React from 'react';
export default function StatusFilter({value, onChange}) {
    return (
        <label>
            <span>Status</span>
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option>All</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>On Hold</option>
                <option>Resolved</option>
            </select>
        </label>
    );
}