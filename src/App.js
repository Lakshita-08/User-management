import React, { useState } from 'react';
import UserDetails from './components/UserDetails/UserDetails';
import Account from './components/AccountCreation/Account';

const App = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={() => handleTabChange('userDetails')}>User Details</button>
        <button onClick={() => handleTabChange('accountCreation')}>Account Creation</button>
      </div>
      {activeTab === 'userDetails' ? <UserDetails /> : <Account />}
    </div>
  );
};

export default App;
