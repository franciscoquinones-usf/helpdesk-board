// Leaves messages for filters, also assigns priority to tickets

'use client'

import React from 'react';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading tickets...</div>;
  }
  if (error) {
    return <div className="text-center text-red-500 py-8">Unable to load tickets.</div>;
  }
  if (isEmpty) {
    return <div className="text-center text-gray-400 py-8">No tickets match your filter.</div>;
  }
  return null;
}