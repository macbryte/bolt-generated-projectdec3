import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import CategoryList from './CategoryList';
    import SummaryView from './SummaryView';

    const App = () => {
      const assets = useSelector(state => state.finance.assets);
      const liabilities = useSelector(state => state.finance.liabilities);

      return (
        <div className="app">
          <h1>Personal Finance Tracker</h1>
          <CategoryList type="assets" title="Assets" />
          <CategoryList type="liabilities" title="Liabilities" />
          <SummaryView assets={assets} liabilities={liabilities} />
        </div>
      );
    };

    export default App;
