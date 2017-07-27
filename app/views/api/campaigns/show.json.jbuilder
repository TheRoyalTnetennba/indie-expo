json.extract! @campaign, :id, :title, :goal, :body, :image_urls, :category, :perks, :progress, :days_left, :pretty_funds, :pitch, :tagline, :city, :country, :duration, :overview, :pretty_goal
json.creator do
  json.first_name @campaign.creator.first_name
  json.last_name @campaign.creator.last_name
  json.image_url @campaign.creator.image_url
end
