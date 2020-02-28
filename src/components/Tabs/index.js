import React, { useState } from 'react';

import './index.scss';

const tabClassName = (tab, active) => `
  Tabs__tab
  ${ tab.label === active.label ? 'Tabs__tab--active' : '' }
`

const Tabs = ({
  tabs
}) => {
  const [firstTab] = tabs;
  const [active, setActive] = useState(firstTab || {})
  
  return (
    <div className="Tabs">
      <ul className="Tabs__options">
        {
          tabs.map(tab =>
            <li onClick={() => setActive(tab)} key={tab.label} className={tabClassName(tab, active)}>
              { tab.label }
            </li>
          )
        }
      </ul>
      <div className="Tabs__current-tab">
        { active.children }
      </div>
    </div>
  );
}

export default Tabs;
