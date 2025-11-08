// Shows count of queued tickets and simple list of titles. Includes a remove and clear queue button. 

'use client'

import React from 'react';

export default function MyQueueSummary({ queue, tickets, onRemove, onClear }) {
  if (!queue) return null;

  const queuedIds = Object.keys(queue);
  const queuedTickets = queuedIds
    .map((id) => tickets.find((t) => t.id === id))
    .filter(Boolean);

  if (queuedTickets.length === 0) {
    return null; // don't render empty summary
  }

  return (
    <div className="mt-8 p-4 bg-[#1a1a1d] text-white rounded border border-gray-700 shadow">
      <h2 className="text-xl font-semibold mb-4"> My Queue ({queuedTickets.length})</h2>

      <ul className="space-y-2 mb-4">{queuedTickets.map((t) => (
          <li key={t.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span className="text-sm">{t.title}</span>
            <button onClick={() => onRemove(t.id)} className="text-red-400 hover:text-red-500 text-sm">Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={onClear} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Clear Queue</button>
    </div>
  );
}