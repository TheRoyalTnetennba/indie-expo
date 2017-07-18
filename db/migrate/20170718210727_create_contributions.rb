class CreateContributions < ActiveRecord::Migration[5.1]
  def change
    create_table :contributions do |t|
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.integer :amount, null: false
      t.timestamps
    end
    add_index :contributions, [:user_id, :campaign_id]
  end
end
