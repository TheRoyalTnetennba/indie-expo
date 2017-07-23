class RemoveContributionsFromCampaigns < ActiveRecord::Migration[5.1]
  def change
    remove_column :campaigns, :contributions
  end
end
