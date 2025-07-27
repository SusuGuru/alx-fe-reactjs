import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // ✅ Make sure this path is correct

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;
