import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import ProductCard from "../../components/ProductCard";

const Favorites = () => {
  const { favorites, removeFavorite, clearNewFavoriteFlag } = useContext(FavoritesContext);

  useEffect(() => {
    clearNewFavoriteFlag(); 
  }, [clearNewFavoriteFlag]);

  if (favorites.length === 0) {
    return <div>Your favorites list is empty!</div>;
  }

 return (
    <div className="favorites-page max-w-7xl md:mx-24 mb-36 mt-10 md:p-8">
      <h1 className="text-2xl font-text font-bold">
        My Favorites ({favorites.length})
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {favorites.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={true}
            onHeartClick={() => removeFavorite(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
