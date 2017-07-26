json.array! @campaigns do |campaign|
  json.id  campaign.id
  json.title  campaign.title
  json.tagline campaign.tagline
  json.image_url  campaign.image_urls[0]
  json.pitch campaign.pitch
  json.category campaign.category.title
  json.progress campaign.progress
end
