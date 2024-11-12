import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/header';
import Grid from './components/grid';
import { loadGrid, mapUsersByUserId } from './utils';
import Loader from './components/loader';
import './App.css';

function App() {
  const [ticketList, setTicketList] = useState([]);
  const [users, setUsers] = useState({});
  const [displayData, setDisplayData] = useState({});
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");
  const [isLoading, setIsLoading] = useState(true);

  const initializeSettings = useCallback(() => {
    setGroupBy(localStorage.getItem("groupBy") || "status");
    setSortBy(localStorage.getItem("sortBy") || "priority");
  }, []);

  const savePreferences = useCallback((prefs) => {
    Object.entries(prefs).forEach(([key, value]) => localStorage.setItem(key, value));
  }, []);

  useEffect(() => {
    initializeSettings();
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        const { tickets, users } = data;
        setTicketList(tickets);
        setUsers(mapUsersByUserId(users));
      })
      .catch(() => console.log("Data fetch failed"));
  }, [initializeSettings]);

  useEffect(() => {
    if (ticketList.length === 0) return;
    setDisplayData(loadGrid(ticketList, groupBy, sortBy));
    setIsLoading(false);
  }, [groupBy, sortBy, ticketList]);

  const updateGrouping = useCallback((value) => {
    setIsLoading(true);
    setGroupBy(value);
    savePreferences({ groupBy: value });
  }, [savePreferences]);

  const updateOrdering = useCallback((value) => {
    setIsLoading(true);
    setSortBy(value);
    savePreferences({ sortBy: value });
  }, [savePreferences]);

  

  

  return (
    <div className="App">
      <Header
        grouping={groupBy}
        setGrouping={updateGrouping}
        ordering={sortBy}
        setOrdering={updateOrdering}
      />
      {isLoading ? <Loader /> : <Grid gridData={displayData} grouping={groupBy} userIdToData={users} />}
    </div>
  );
}

export default App;
