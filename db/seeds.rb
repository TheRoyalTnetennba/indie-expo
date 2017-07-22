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
inappropes = Category.create(title: "MotherFuckingGadgetsYall!!!!")
# inappropes = Category.all.first

Campaign.destroy_all
lorem = "Cras dignissim, metus ut lobortis tristique, diam nisl dapibus eros, eu pretium mi nunc non dui. Integer tempus tortor sem, consectetur lobortis dolor rutrum in. Fusce sed purus sit amet nunc laoreet suscipit. Etiam pellentesque lobortis mattis. Fusce efficitur tortor sit amet urna commodo sollicitudin. Nullam vehicula sagittis eros, quis rhoncus orci volutpat at. Morbi mauris diam, sollicitudin vel sem vitae, mattis egestas"

item1 = { title: "Drones Drones Drones", goal: 12341234, creator_id: guest.id, category_id: inappropes.id, tagline: "A Modular, Extensible Architecture for Automating the Future", city: "Detroit", country: "USA", duration: 77, overview: lorem, pitch: "What if you could innovate the next generation of venture capitalist with open source platform for your SAAS in the cloud?", archived: "false", body: lorem }

camp1 = Campaign.create!(item1)
12.times { Campaign.create!(item1) }
