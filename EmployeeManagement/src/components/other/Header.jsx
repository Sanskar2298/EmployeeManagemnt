import React from 'react';

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    changeUser('');
  };

  const username = data?.fullName || 'User';
  const roleEmoji = data?.role === 'admin' ? '👑' : '🙌';

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {username} {roleEmoji}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
