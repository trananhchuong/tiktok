import React from 'react';

import Header from '~/components/layouts/components/Header';

export default function OnlyHeaderLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
