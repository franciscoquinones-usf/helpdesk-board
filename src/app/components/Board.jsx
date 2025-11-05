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