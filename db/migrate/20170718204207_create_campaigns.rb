class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.integer :goal, null: false
      t.text :body
      t.text :image_urls, array:true, default: ['/assets/defaults/user_probile_thumbnail.png']
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.boolean :archived, null: false, default: false
      t.timestamps
    end
    add_index :campaigns, [:creator_id, :category_id]
  end
end
