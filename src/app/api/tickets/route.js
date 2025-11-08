//api route returning JSON

export async function GET () {
  const tickets = [
{
  id: "t-1001",
  title: "Cannot connect to VPN",
  description: "User reports intermittent VPN connectivity errors.",
  priority: "High",        // Low | Medium | High | Critical
  status: "Open",          // Open | In Progress | On Hold | Resolved
  assignee: "Unassigned",  // string
  updatedAt: "2025-10-31T12:05:00Z"
},
{
  id: "t-1002",
  title: "Email not syncing",
  description: "Email client is not refreshing.",
  priority: "Medium",        // Low | Medium | High | Critical
  status: "In Progress",          // Open | In Progress | On Hold | Resolved
  assignee: "Alice",  // string
  updatedAt: "2025-10-31T13:05:00Z"
},
{
  id: "t-1003",
  title: "Monitor not displaying",
  description: "Monitor shows black screen when booting up.",
  priority: "High",        // Low | Medium | High | Critical
  status: "Open",          // Open | In Progress | On Hold | Resolved
  assignee: "Adam",  // string
  updatedAt: "2025-10-31T14:05:00Z"
},
{
  id: "t-1004",
  title: "Keyboard not connected",
  description: "Typing does not work.",
  priority: "High",        // Low | Medium | High | Critical
  status: "Resolved",          // Open | In Progress | On Hold | Resolved
  assignee: "Adam",  // string
  updatedAt: "2025-10-31T15:05:00Z"
},
{
  id: "t-1005",
  title: "Mouse not connected",
  description: "Mouse does not move on the screen.",
  priority: "High",        // Low | Medium | High | Critical
  status: "Resolved",          // Open | In Progress | On Hold | Resolved
  assignee: "Adam",  // string
  updatedAt: "2025-10-31T16:05:00Z"
},
{
  id: "t-1006",
  title: "Laptop not charging",
  description: "Work laptop does not charge when connected.",
  priority: "Medium",        // Low | Medium | High | Critical
  status: "Open",          // Open | In Progress | On Hold | Resolved
  assignee: "Unassigned",  // string
  updatedAt: "2025-10-31T17:05:00Z"
},
{
  id: "t-1007",
  title: "No volume",
  description: "No volume outputting from computer.",
  priority: "Low",        // Low | Medium | High | Critical
  status: "In Progress",          // Open | In Progress | On Hold | Resolved
  assignee: "Adam",  // string
  updatedAt: "2025-10-31T18:05:00Z"
},
{
  id: "t-1008",
  title: "Won't connect to Wi-Fi",
  description: "Internet not working, can't use online services.",
  priority: "Critical",        // Low | Medium | High | Critical
  status: "In Progress",          // Open | In Progress | On Hold | Resolved
  assignee: "Sarah",  // string
  updatedAt: "2025-10-31T19:05:00Z"
},
{
  id: "t-1009",
  title: "Jammed printer",
  description: "Printer not working in office.",
  priority: "Low",        // Low | Medium | High | Critical
  status: "Resolved",          // Open | In Progress | On Hold | Resolved
  assignee: "Bob",  // string
  updatedAt: "2025-10-31T20:05:00Z"
},
{
  id: "t-1010",
  title: "Can't log in",
  description: "User reports intermittent VPN connectivity errors.",
  priority: "High",        // Low | Medium | High | Critical
  status: "Open",          // Open | In Progress | On Hold | Resolved
  assignee: "Unassigned",  // string
  updatedAt: "2025-10-31T21:05:00Z"
},
{
  id: "t-1011",
  title: "Two Factor Setup Request",
  description: "App asked me to signup with 2fa, how do I do this?",
  priority: "Low",        // Low | Medium | High | Critical
  status: "Open",          // Open | In Progress | On Hold | Resolved
  assignee: "Unassigned",  // string
  updatedAt: "2025-10-31T22:05:00Z"
},
{
  id: "t-1012",
  title: "New monitor",
  description: "User requesting new monitor.",
  priority: "Low",        // Low | Medium | High | Critical
  status: "On Hold",          // Open | In Progress | On Hold | Resolved
  assignee: "Facilities",  // string
  updatedAt: "2025-10-31T23:05:00Z"
}
];

return Response.json(tickets);
}