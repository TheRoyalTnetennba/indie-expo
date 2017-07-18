class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :image_url, defaults: '/assets/defaults/user_probile_thumbnail.png'
      t.text :bio
      t.string :email, null: false
      t.string :session_token
      t.timestamps
    end
    add_index :users, [:id, :email], unique: true
  end
end
