import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root';
import configureStore from './frontend/store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// class CreateUsers < ActiveRecord::Migration[5.1]
//   def change
//     create_table :users do |t|
//       t.string :username, null: false
//       t.string :image_url,
//       t.timestamps
//     end
//     add_index :users, [:id, :party_id], unique: true
//   end
// end
