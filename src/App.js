
import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import Account from './components/Account';

const App = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs bg-gray-200 p-4">
        <button
          onClick={() => handleTabChange('userDetails')}
          className={`mr-2 p-2 ${activeTab === 'userDetails' ? 'bg-blue-500 text-white' : ''}`}
        >
          User Details
        </button>
        <button
          onClick={() => handleTabChange('accountCreation')}
          className={`p-2 ${activeTab === 'accountCreation' ? 'bg-blue-500 text-white' : ''}`}
        >
          Account Creation
        </button>
      </div>
      {activeTab === 'userDetails' ? <UserDetails /> : <Account />}
    </div>
  );
};

export default App;
