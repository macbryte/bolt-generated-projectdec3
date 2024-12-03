import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';

    const CategoryList = ({ type, title }) => {
      const dispatch = useDispatch();
      const categories = useSelector(state => state.finance[type]);
      const [newCategoryName, setNewCategoryName] = useState('');
      const [newSubcategoryName, setNewSubcategoryName] = useState('');

      const handleAddCategory = () => {
        if (newCategoryName.trim()) {
          dispatch(financeActions.addCategory({ type, category: { name: newCategoryName, subcategories: [] } }));
          setNewCategoryName('');
        }
      };

      const handleUpdateBalance = (category, subcategory, balance) => {
        dispatch(financeActions.updateBalance({ type, category, subcategory, balance }));
      };

      return (
        <div className="category-list">
          <h2>{title}</h2>
          {categories.map(category => (
            <div key={category.name} className="category">
              <h3>{category.name}</h3>
              <ul>
                {category.subcategories.map(subcategory => (
                  <li key={subcategory.name}>
                    <input
                      type="number"
                      value={subcategory.balance}
                      onChange={(e) => handleUpdateBalance(category.name, subcategory.name, parseFloat(e.target.value))}
                    />
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="new-category">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Add new category"
            />
            <button onClick={handleAddCategory}>Add</button>
          </div>
        </div>
      );
    };

    export default CategoryList;
