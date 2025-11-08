// Shows count of queued tickets and simple list of titles. Includes a remove and clear queue button. 

'use client'

import React from 'react';
export default function MyQueueSummary({queue, tickets, onRemove, onClear}) {
    const queuedIds = Object.keys(queue || {});
    const queuedTickets = queuedIds.map((id) => tickets.find((t) => t.id === id)).filter(Boolean);

    return ( 
        <div>
            <h2>My Queue</h2>
            <p>{queuedTickets.length} ticket(s) selected</p>

            {queuedTickets.length === 0 ? (
                <p>No Tickets in queue</p>
            ) : (
                <ul>{queuedTickets.map((t) => (
                    <li key={t.id}>
                        <span>{t.title}</span>
                        <div>
                            <button onClick={() => onRemove(t.id)}>Remove</button>
                        </div>
                    </li>
                ))}
                </ul>
            )}
            
        <div>
            <button onClick= {onClear} disabled={queuedTickets.length === 0}>Clear Queue</button>
        </div>
    </div>
    );
}