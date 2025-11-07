// maps tickets to Ticket Card 

'use client'

import React from 'react';
import TicketCard from './TicketCard';

export default function TicketList({tickets, onAddToQueue, queue}) {
    if (!tickets || tickets.length === 0) return null;
    return ( 
        <div>
            {tickets.map((ticket) => ( 
                <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                onAddToQueue={onAddToQueue} 
                queued={!!queue[ticket.id]}/>
            ))}
        </div>
    );
}