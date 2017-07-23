class AddContributionsToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :contributions, :integer, null: false, default: 0
  end
end
