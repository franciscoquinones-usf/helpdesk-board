// displays title, priority, status, assignee, updatedAt

'use client'

import React from 'react';

function badgeForPriority(p) {
  const base = 'inline-block px-2 py-1 rounded text-xs font-semibold';
  switch (p) {
    case 'Critical':
      return <span className={`${base} bg-red-600 text-white`}>Priority: {p}</span>;
    case 'High':
      return <span className={`${base} bg-orange-600 text-white`}>Priority:{p}</span>;
    case 'Medium':
      return <span className={`${base} bg-yellow-500 text-black`}>Priority:{p}</span>;
    default:
      return <span className={`${base} bg-green-600 text-white`}>Priority:{p}</span>;
  }
}

function badgeForStatus(s) {
  const base = 'inline-block px-2 py-1 rounded text-xs font-semibold';
  switch (s) {
    case 'Open':
      return <span className={`${base}`}>Status: {s}</span>;
    case 'In Progress':
      return <span className={`${base}`}>Status: {s}</span>;
    case 'On Hold':
      return <span className={`${base}`}> Status: {s}</span>;
    case 'Resolved':
      return <span className={`${base}`}>Status: {s}</span>;
    default:
      return <span className={`${base}`}>Status: {s}</span>;
  }
}

export default function TicketCard({ticket, onAddToQueue, queued}) {
  const {id, title, description, priority, status, assignee, updatedAt} = ticket;
  const updated = new Date(updatedAt).toLocaleString();

  return (
    <div className="bg-[#1a1a1d] border border-gray-700 rounded-lg p-4 shadow-md text-white flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-2">
            <div className="flex gap-2">
            {badgeForPriority(priority)} {badgeForStatus(status)}
            </div>
        </div>

        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{description}</p>

        <div className="text-sm text-gray-400">
            <p>Assignee: {assignee || 'Unassigned'}</p>
            <p>Updated: {updated}</p>
        </div>
    </div>

    <div className="mt-4">
        <button onClick={() => onAddToQueue(id)} disabled={queued || status === 'Resolved'} className={`w-full py-2 rounded font-medium ${
    status === 'Resolved'
        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
        : queued
        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700 text-white'
  }`}
>
    {status === 'Resolved'? 'Resolved Ticket'
        : queued
        ? 'In My Queue'
        : 'Add to My Queue'}
    </button>
    </div>
    </div>
  );
}
