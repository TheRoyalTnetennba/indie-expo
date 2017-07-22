@campaigns.each do |campaign|
  json.id  campaign.id
  json.title  campaign.title
  json.tagline campaign.tagline
  json.image_url  campaign.image_urls[0]
end
