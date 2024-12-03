import React from 'react';
    import { Pie } from 'chart.js/auto';

    const SummaryView = ({ assets, liabilities }) => {
      const totalAssets = assets.reduce((acc, category) => acc + category.subcategories.reduce((subAcc, subcategory) => subAcc + subcategory.balance, 0), 0);
      const totalLiabilities = liabilities.reduce((acc, category) => acc + category.subcategories.reduce((subAcc, subcategory) => subAcc + subcategory.balance, 0), 0);

      return (
        <div className="summary-view">
          <h2>Summary</h2>
          <Pie data={{
            labels: ['Assets', 'Liabilities'],
            datasets: [{
              data: [totalAssets, totalLiabilities],
              backgroundColor: ['#36A2EB', '#FFCE56'],
            }],
          }} />
        </div>
      );
    };

    export default SummaryView;
