class ChangeDefaultImgUrls < ActiveRecord::Migration[5.1]
  def change
    change_column :campaigns, :image_urls, :string, default: ["https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915373/campaign_profile_q4poik.png"], array: true
    add_column :categories, :image_url, :string
    change_column :perks, :image_url, :string
    change_column :users, :image_url, :string, default: "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500916260/if_profle_1055000_wvckm2.png"
  end
end
