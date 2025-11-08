// Parent: State, effects, lifting

'use client';

import React, { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { priorityOrder, statusOrder } from '../lib/severity';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

// Fetch Tickets
  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchTickets();
  }, []);

// Visible tickets
  const visibleTickets = tickets.filter((t) => {
    const statusMatch = filters.status === 'All' || t.status === filters.status;
    const priorityMatch = filters.priority === 'All' || t.priority === filters.priority;
    const searchMatch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    return statusMatch && priorityMatch && searchMatch;
  });

// Queue Handlers
  function addToQueue(id) {
    setQueue((prev) => ({ ...prev, [id]: true }));
  }

  function removeFromQueue(id) {
    setQueue((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  }

  function clearQueue() {
    setQueue({});
  }

// Conditional States
if (loading) return <StatusMessage type="Loading"/>;
if (error) return <StatusMessage type="Error"/>;

return (
  <div>
    <div>
      <StatusFilter value={filters.status} onChange={(val) => setFilters({ ...filters, status: val })}/>
      <PriorityFilter value={filters.priority} onChange={(val) => setFilters({ ...filters, priority: val })}/>
      <SearchBox value={search} onChange={setSearch} />
    </div>
    {visibleTickets.length === 0 ? (
      <StatusMessage type="empty"/>
    ) : (
      <TicketList tickets={visibleTickets} onAddToQueue={addToQueue} queue={queue}/>
    )}
    <MyQueueSummary tickets={tickets.filter((t) => queue[t.id])} onRemove={removeFromQueue} onClear={clearQueue}/>
  </div>
)}
