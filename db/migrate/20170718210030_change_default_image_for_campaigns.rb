class ChangeDefaultImageForCampaigns < ActiveRecord::Migration[5.1]
  def change
    change_column :campaigns, :image_urls, :string, array:true , default: ['/assets/defaults/campaign_profile.png']
  end
end
