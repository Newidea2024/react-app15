import React from 'react';

// Define types for props
interface Item {
  id: number;
  name: string;
  price: number;
  starred: boolean;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onToggle }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price} 
          <button onClick={() => onDelete(item.id)}>Delete</button>
          <button onClick={() => onToggle(item.id)}>
            {item.starred ? 'Unstar' : 'Star'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

