json.array! @campaigns do |campaign|
  json.id  campaign.id
  json.title  campaign.title
  json.tagline campaign.tagline
  json.image_url  campaign.image_urls[0]
  json.category campaign.category.title
end
