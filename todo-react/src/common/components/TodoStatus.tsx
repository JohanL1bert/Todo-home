import React from 'react';

export const TodoStatus = () => {
  return (
    <section className="note">
      <div className="container">
        <div className="note__inner">
          <div className="note__header">
            <div className="note__header__category">Note Category</div>
            <div className="note__header__active">Active</div>
            <div className="note__header__archived">Archived</div>
          </div>
          <div className="note__body">
            <div className="note__body__inner">
              <ul className="note__body__items" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
