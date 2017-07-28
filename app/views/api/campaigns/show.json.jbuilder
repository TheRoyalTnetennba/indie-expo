json.extract! @campaign, :id, :title, :goal, :body, :image_urls, :category, :progress, :days_left, :pretty_funds, :pitch, :tagline, :city, :country, :duration, :overview, :pretty_goal
json.creator do
  json.creator_id @campaign.creator.id
  json.first_name @campaign.creator.first_name
  json.last_name @campaign.creator.last_name
  json.image_url @campaign.creator.image_url
end
json.perks do
  json.array! @campaign.perks do |perk|
    json.id perk.id
    json.title perk.title
    json.description perk.description
    json.price perk.price
    json.image_url perk.image_url
  end
end
