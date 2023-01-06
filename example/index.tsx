import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Table from '../.';

const data = [
  {
    'operator': '*Celcom Axiata (LTE)',
    'headset_display': 'CELCOM / My Celcom / 502 19',
    '3g_availability': true,
  },
  {
    'operator': '*DiGi Telecom (LTE)',
    'headset_display': 'DiGi 1800 / DiGi / MYMY18',
    '3g_availability': true,
  },
  {
    'operator': '*Maxis (LTE)',
    'headset_display': 'U Mobile / MYS 18 / MY18',
    '3g_availability': true,
  },
  {
    'operator': 'U Mobile (LTE)',
    'headset_display': 'U Mobile / MYS 18 / MY18',
    '3g_availability': true,
  }
]
const App = () => {
  return (
    <div>
      <Table data={data}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
