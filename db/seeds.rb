# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
guest = User.create(password: "asdfoa2345ijdsofijaoesif1234jaowiejfo", email: "guestUser@IndieExpo.com", bio: "The Architect", first_name: "Graham", last_name: "Paye")
# guest = User.all.first

Category.destroy_all
inappropes = Category.create(title: "Gadgets!!!!")
wearable = Category.create(title: "Fashion & Wearables")
smarthome = Category.create(title: "Home")
pets = Category.create(title: "Pets")
# inappropes = Category.all.first
Contribution.destroy_all
Campaign.destroy_all
lorem = "Cras dignissim, metus ut lobortis tristique, diam nisl dapibus eros, eu pretium mi nunc non dui. Integer tempus tortor sem, consectetur lobortis dolor rutrum in. Fusce sed purus sit amet nunc laoreet suscipit. Etiam pellentesque lobortis mattis. Fusce efficitur tortor sit amet urna commodo sollicitudin. Nullam vehicula sagittis eros, quis rhoncus orci volutpat at. Morbi mauris diam, sollicitudin vel sem vitae, mattis egestas"

item1 = { title: "Drones Drones Drones", goal: 12341234, creator_id: guest.id, category_id: inappropes.id, tagline: "A Modular, Extensible Architecture for Automating the Future", city: "Detroit", country: "USA", duration: 77, overview: lorem, pitch: "What if you could innovate the next generation of venture capitalist with open source platform for your SAAS in the cloud?", archived: "false", body: lorem }
item2 = { title: "Levitating Footwear", goal: 350000, creator_id: guest.id, category_id: wearable.id, tagline: "I am a leaf on the wind. Watch how I soar.", city: "Detroit", country: "USA", duration: 63, overview: lorem, pitch: "Aimlessly march across the barren endlessness of the cosmic void. Float above the sea of indifferent and meaningless chaos. Discover the perfect tranquility of wafting about the cold night sky like the souls of the damned or a discarded plastic bag.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/v1500938448/saksham-gangwar-146658_vordyt.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915378/redd-angelo-41843_vlzqsp.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915377/pexels-photo-219561_eqehje.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915374/karina-carvalho-87594_i478dr.jpg"] }
item3 = { title: "Bee Secure Home Defense", goal: 7050000, creator_id: guest.id, category_id: smarthome.id, tagline: "According to all known laws of aviation...", city: "Detroit", country: "USA", duration: 24, overview: lorem, pitch: "Cover your front porch with those angry GMO bees. These are the kind of bees that will attack for no reason and can sting over and over without dying. Protect your hive. Protect your honey. Get bees.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915379/honey-bee-water-buckfast-59829_kbg9vr.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500929559/honey-bees-beehive-honey-bees-57398_h98rjx.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500929557/bees-beehive-beekeeping-honey-48022_uf7k3m.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500929557/bees-swarm-insects-macro-60019_zpigv2.jpg"] }
item4 = { title: "Bow Wow Biotics", goal: 473652200, creator_id: guest.id, category_id: pets.id, tagline: "Man's best friend. Made to order.", city: "Detroit", country: "USA", duration: 24, overview: lorem, pitch: "Build your own, unique designer dog breed in four easy steps. 1) Select your base breed. 2) Select a hybrid breed. 3) Love and cherish your beautiful and unique creation.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/v1500921122/pexels-photo-64658_z3e820.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500921120/pexels-photo-520840_aeqeqc.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500921120/pexels-photo-485294_u1zozq.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500921121/ferdinand-stohr-228397_fyujkp.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/v1500921122/andrew-branch-171577_zrfo2t.jpg"] }
camp2 = Campaign.create(item2)
camp3 = Campaign.create(item3)
camp4 = Campaign.create(item4)

camp1 = Campaign.create!(item1)
12.times { Campaign.create!(item1) }
Contribution.create(user_id: guest.id, amount: 550000, campaign_id: camp1.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: camp2.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: camp3.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: camp4.id)
