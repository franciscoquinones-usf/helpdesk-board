// Leaves messages for filters, also assigns priority to tickets

'use client'

import React from 'react';
export default function StatusMessage({loading, error, isEmpty}) {
    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Unable to load tickets</div>;
    }
    if (isEmpty) {
        return <div>No tickets match your filter</div>;
    }
    return null;
}