json.array! @categories do |category|
  json.id  category.id
  json.title  category.title
  json.image_url  category.image_url
end
