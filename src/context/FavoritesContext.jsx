import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [hasNewFavorite, setHasNewFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, product];
      setHasNewFavorite(true);
      return updatedFavorites;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((item) => item.id !== id);
      return updatedFavorites;
    });
  };

  const clearNewFavoriteFlag = () => {
    setHasNewFavorite(false); // Clear notification when clicking on favorites page
  }

  return (
    <FavoritesContext.Provider 
    value={{ favorites, addFavorite, removeFavorite, hasNewFavorite, clearNewFavoriteFlag }}>
      {children}
    </FavoritesContext.Provider>
  );
};
