import React from 'react';

const NewItemForm = ({ newItem, handleNewItem, handleSubmit }) => {
  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className="row">
        <label>New Item</label>
        <input 
          value={newItem}  
          type="text" 
          id="item" 
          onChange={handleNewItem}
        />
        <button className='btn'>Add</button>
      </div>
    </form>
  );
};

export default NewItemForm;
