import React from 'react';

export const NotFound = () => {
  return (
    <div className="empty">
      <div className="container">
        <div className="empty__inner" style={{ marginLeft: '50px', height: '50px' }}>
          <p className="empty__text" style={{ fontSize: '22px' }}>
            No element
          </p>
        </div>
      </div>
    </div>
  );
};
