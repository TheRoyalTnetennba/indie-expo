class FixUserImage < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, null: false, default: "/assets/defaults/user_profile_thumbnail.png"
  end
end
