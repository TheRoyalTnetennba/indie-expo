class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.string :title, null: false
      t.timestamps
    end
    add_index :categories, :id
  end
end
