// Shows count of queued tickets and simple list of titles. Includes a remove and clear queue button. 

'use client'

import React from 'react';
export default function MyQueueSummary({queue, tickets, onRemove, onClear}) {
    const queuedIds = Object.keys(queue);
    const queuedTickets = queuedIds.map((id) => tickets.find((t) => t.id === id)).filter(Boolean);


}