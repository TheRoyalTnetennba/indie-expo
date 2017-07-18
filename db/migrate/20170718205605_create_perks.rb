class CreatePerks < ActiveRecord::Migration[5.1]
  def change
    create_table :perks do |t|
      t.integer :campaign_id, null: false
      t.string :title, null: false
      t.text :description
      t.integer :price, null: false
      t.string :image_url, null: false, default: '/assets/defaults/perk.png' 
      t.timestamps
    end
    add_index :perks, [:campaign_id]
  end
end
