// displays title, priority, status, assignee, updatedAt

'use client'

import React from 'react';

function badgeForPriority(p) {
    const base = 'inline-block px-2';
    switch(p) {
        case 'Critical': return <span>{p}</span>
        case 'High': return <span>{p}</span>
        case 'Medium': return <span>{p}</span>
        default: return <span>{p}</span>
    }
}

function badgeForStatus(s) {
    const base = 'inline-block px-2';
    switch(s) {
        case 'Open': return <span>{s}</span>
        case 'In Progress': return <span>{s}</span>
        case 'On Hold': return <span>{s}</span>
        case 'Resolved': return <span>{s}</span>
        default: return <span>{s}</span>
    }
}

export default function TicketCard({ticket, onAddToQueue, queued}) {
    const {id, title, description, priority, status, assignee, updatedAt} = ticket; 
    const updated = new Date(updatedAt).toLocaleString();

    return (
        <><div>
            <div>
                <h3>{title}</h3>
                <div>{badgeForPriority(priority)} {badgeForStatus(status)}</div>
            </div>
            <p>{description}</p>
            <div>
                <span>Assignee: {assignee}</span>
                <span>Updated: {updated}</span>
            </div>
        </div><div>
                <button onClick={() => onAddToQueue(id)} disabled={queued}>{queued ? 'In My Queue' : 'Add to My Queue'}</button>
                {queued && <p>This ticket is already in your queue.</p>}
            </div></>
    )
}