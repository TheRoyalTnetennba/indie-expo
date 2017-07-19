class RequireUserPic < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, null: false
  end
end
