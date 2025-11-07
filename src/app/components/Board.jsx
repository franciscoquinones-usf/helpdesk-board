// Parent: State, effects, lifting

'use client';

import React, {useEffect, useState, useCallback} from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import {priorityOrder, statusOrder} from '../lib/severity';

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({status: 'All', priority: 'All'});
    const [search, setSearch] = useState (''); 
    const [queue, setQueue] = useState({});
}

// Fetch Tickets