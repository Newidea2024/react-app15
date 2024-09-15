// app.tsx 
import { useState } from 'react';
import ItemList from './ItemList'; // ItemList imported

// Define the type for the items
interface Item {
  id: number;
  name: string;
  price: number;
  starred: boolean;
}

const TEST_DATA: Item[] = [
  { id: 1, name: 'Item 1', price: 100, starred: false },
  { id: 2, name: 'Item 2', price: 200, starred: false },
  { id: 3, name: 'Item 3', price: 300, starred: false }
];

function App() {
  const [list, setList] = useState<Item[]>(TEST_DATA);

  // Add Item Function
  const addItem = () => {
    const newItem: Item = { id: list.length + 1, name: 'New Item', price: 400, starred: false };
    setList([...list, newItem]);
  };

  // Delete Item Function
  const deleteItem = (id: number) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  // Toggle Starred Function
  const toggleStarred = (id: number) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, starred: !item.starred } : item
    );
    setList(updatedList);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <button onClick={addItem}>Add New Item</button>
      <ItemList items={list} onDelete={deleteItem} onToggle={toggleStarred} />
    </div>
  );
}

export default App;

