json.extract! @user, :id, :first_name, :last_name, :image_url, :bio, :email, :num_contributions

json.campaigns do
  json.array! @user.campaigns do |campaign|
    json.id campaign.id
    json.image_url campaign.image_urls[0]
    json.category campaign.category.title
    json.pretty_goal campaign.pretty_goal
    json.pretty_funds campaign.pretty_funds
    json.progress campaign.progress
    json.days_left campaign.days_left
    json.created_at campaign.created_at
    json.tagline campaign.tagline
    json.pitch campaign.pitch
    json.overview campaign.overview
    json.city campaign.city
    json.country campaign.country
    json.pitch campaign.pitch
    json.duration campaign.duration
  end
end
