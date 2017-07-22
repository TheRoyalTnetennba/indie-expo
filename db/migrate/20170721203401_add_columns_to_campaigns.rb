class AddColumnsToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :tagline, :string
    add_column :campaigns, :city, :string
    add_column :campaigns, :country, :string
    add_column :campaigns, :duration, :integer
    add_column :campaigns, :overview, :text
    add_column :campaigns, :pitch, :text
  end
end
