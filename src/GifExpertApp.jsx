import React, { useState } from 'react';
import AddCategory from './Componets/AddCategory';
import GifGrid from './Componets/GifGrid';

const GifExpertApp = () => {
  const initialState = ['One Punch'];
  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
