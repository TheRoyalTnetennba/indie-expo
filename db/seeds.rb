# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Perk.destroy_all
Campaign.destroy_all
Contribution.destroy_all
Category.destroy_all
User.destroy_all

# USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS USERS
pw = SecureRandom.urlsafe_base64
guest = User.create(password: pw, email: "guestUser@IndieExpo.com", bio: "The Architect", first_name: "Graham", last_name: "Paye", image_url: "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501237422/child-children-girl-happy_za3sjw.jpg")
fenchurch = User.create(password: pw, email: 'fenchurchdent@IndieExpo.com', bio: 'Plays the cello, has good taste in music and owns a pair of speakers that would have impressed the guys who put up Stonehenge', first_name: 'Fenchurch', last_name: 'Dent', image_url: 'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501217994/woman-umbrella-floating-jumping-466455_utajmz.jpg')
bourgeois = User.create(password: pw, email: 'spiders@IndieExpo.com', bio: "French-American artist. Best known for her large-scale sculpture and installation art, Bourgeois was also a prolific painter and printmaker. She explored a variety of themes over the course of her long career including domesticity and the family, and the body, as well as death and the subconscious. Although Bourgeois exhibited with the Abstract Expressionists and her work has much in common with Surrealism and Feminist art, she was not formally affiliated with a particular artistic movement.", first_name: "Louise", last_name: "Bourgeois", image_url: "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501277805/pexels-photo-211816_tflrpy.jpg")
sissa = User.create(password: pw, email: "grainsowheat@IndieExpo.com", bio: "Legendary inventor of chess.", first_name: "Sissa", last_name: "ibn Dahir", image_url: "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278425/pexels-photo-57018_xbak30.jpg")
 hillyer = User.create(password: pw, email: "juleshillyer@IndieExpo.com", bio: "Tinkerer. Mechanic. Inventor. Travel Journalist.", first_name: "Jules", last_name: "Hillyer", image_url: "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281512/sidney-perry-105613_edydkp.jpg")


# CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES CATEGORIES
productivity = Category.create(title: "Productivity")
wearable = Category.create(title: "Fashion & Wearables")
smarthome = Category.create(title: "Home")
pets = Category.create(title: "Pets")
art = Category.create(title: "Art")
games = Category.create(title: "Games")
transportation = Category.create(title: 'Transportation')


# CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS CAMPAIGNS
lorem = "Cras dignissim, metus ut lobortis tristique, diam nisl dapibus eros, eu pretium mi nunc non dui. Integer tempus tortor sem, consectetur lobortis dolor rutrum in. Fusce sed purus sit amet nunc laoreet suscipit. Etiam pellentesque lobortis mattis. Fusce efficitur tortor sit amet urna commodo sollicitudin. Nullam vehicula sagittis eros, quis rhoncus orci volutpat at. Morbi mauris diam, sollicitudin vel sem vitae, mattis egestas"

dogs = Campaign.create(title: "Bow Wow Biotics", goal: 473652200, creator_id: guest.id, category_id: pets.id, tagline: "Man's best friend. Made to order.", city: "Detroit", country: "USA", duration: 24, overview: lorem, pitch: "Build your own, unique designer dog breed in four easy steps. 1) Select your base breed. 2) Select a hybrid breed. 3) Love and cherish your beautiful and unique creation.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921122/pexels-photo-64658_z3e820.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921120/pexels-photo-520840_aeqeqc.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921120/pexels-photo-485294_u1zozq.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921121/ferdinand-stohr-228397_fyujkp.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921122/andrew-branch-171577_zrfo2t.jpg"])

stressgames = Campaign.create(title: 'TableTop EnJoyable', goal: 37000, creator_id: sissa.id, category_id: games.id, tagline: "Alleviate stress with clinically tested board games", city: "Austin", country: "USA", duration: 30, overview: lorem, pitch: "We are researching and designing a series of games designed to help people with PTSD and social anxiety. The games will be made with a carefully selected, soothing color pallet, and warm, reassuring materials.", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278656/pexels-photo-209640_nuareg.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278817/pexels-photo-208147_zzbz5i.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278814/pexels-photo-262488_gpkhro.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278656/pexels-photo-220053_kmilgg.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278434/yanni-panesa-216327_zf71pu.jpg"])

studio = Campaign.create(title: 'Communal Art Studio', goal: 300000, creator_id: bourgeois.id, category_id: art.id, tagline: 'Discover the next generation of artists in Myrtle Beach', city: 'Myrtle Beach', country: 'USA', duration: 68, overview: lorem, pitch: 'We are raising funds to build a communal art studio. Because community and art are deeply intertwined, we aim to develop a creation experience that fudndamentally incoorporates both. The studio will be operating as a donation-funded non-profit.', body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280577/pexels-photo-417270_rzfnzc.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280676/art-pottery-c-craft-162574_w7l2di.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280663/pexels-photo-342001_fgiltr.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280622/pexels-photo-197868_pgqauj.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280578/japan-structure-monument-architecture-161918_nsst37.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280575/art-creative-metal-creativity_b2do3w.jpg"])

time = Campaign.create(title: "Time Machine", goal: 1000000000, creator_id: hillyer.id, category_id: transportation.id, tagline: 'Procrastinate indefinitely. Endlessly tour the centuries.', city: 'Chicago', country: 'USA', duration: 1000000, overview: lorem, pitch: 'Bounce back and forth across time and space, making and losing memories, gathering stories, and compounding interest.', body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281866/pexels-photo-209168_ukc2c2.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281916/pexels-photo-409701_mrgsy2.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281913/macro-focus-cogwheel-gear-159275_dzdcoq.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281916/pexels-photo-149387_kwulmf.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281920/pexels-photo-290470_oel5o4.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501281918/pexels-photo-190574_plhogs.jpg"])

drones = Campaign.create!(title: "Valkyrie Drones", goal: 1341234, creator_id: guest.id, category_id: productivity.id, tagline: "A Modular, Extensible Architecture for Automating the Future", city: "Detroit", country: "USA", duration: 77, overview: lorem, pitch: "What if you could programmatically innovate the next generation of venture capitalist with open source platform for your SAAS in the cloud? What there could be increased interconnectivity while minimizing bandwidth, alowing you to focus on the things you love?", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282173/pexels-photo-518674_ztpdsd.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282172/pexels-photo-392024_ddahbo.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282175/pexels-photo-219701_mlidrf.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282177/pexels-photo-378268_ewtavz.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282178/pexels-photo-336232_avcgoa.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501282315/pexels-photo-442591_urvhtg.jpg"])

levitating = Campaign.create(title: "Levitating Footwear", goal: 350000, creator_id: fenchurch.id, category_id: wearable.id, tagline: "I am a leaf on the wind. Watch how I soar.", city: "Detroit", country: "USA", duration: 63, overview: lorem, pitch: "Aimlessly march across the barren endlessness of the cosmic void. Float above the sea of indifferent and meaningless chaos. Discover the perfect tranquility of wafting about the cold night sky like the souls of the damned or a discarded plastic bag.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500938448/saksham-gangwar-146658_vordyt.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500915378/redd-angelo-41843_vlzqsp.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500915377/pexels-photo-219561_eqehje.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500915374/karina-carvalho-87594_i478dr.jpg"])

bees = Campaign.create(title: "Bee Secure Home Defense", goal: 7050000, creator_id: guest.id, category_id: smarthome.id, tagline: "According to all known laws of aviation...", city: "Detroit", country: "USA", duration: 24, overview: lorem, pitch: "Cover your front porch with those angry GMO bees. These are the kind of bees that will attack for no reason and can sting over and over without dying. Protect your hive. Protect your honey. Get bees.", archived: "false", body: lorem, image_urls: ["https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500915379/honey-bee-water-buckfast-59829_kbg9vr.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500929559/honey-bees-beehive-honey-bees-57398_h98rjx.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500929557/bees-beehive-beekeeping-honey-48022_uf7k3m.jpg", "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500929557/bees-swarm-insects-macro-60019_zpigv2.jpg"])



# CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS CONTRIBUTIONS
Contribution.create(user_id: guest.id, amount: 550000, campaign_id: drones.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: levitating.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: bees.id)
Contribution.create(user_id: guest.id, amount: 50000, campaign_id: dogs.id)
Contribution.create(user_id: sissa.id, amount: 150, campaign_id: studio.id)
Contribution.create(user_id: fenchurch.id, amount: 3784, campaign_id: drones.id)
Contribution.create(user_id: fenchurch.id, amount: 3784, campaign_id: levitating.id)
Contribution.create(user_id: fenchurch.id, amount: 3784, campaign_id: bees.id)
Contribution.create(user_id: fenchurch.id, amount: 3784, campaign_id: dogs.id)
Contribution.create(user_id: bourgeois.id, amount: 4500, campaign_id: stressgames.id)


# PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS PERKS
Perk.create(campaign_id: levitating.id, title: "Self De-icing Shoelaces", description: "Maintain comfort and security, even at extremely high altitudes", price: 5000, image_url: "http://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280208/pinkrunning-pink-running-new-442400_egnt7q.jpg")
Perk.create(campaign_id: levitating.id, title: "Shoe Rack", description: "Keep your burgeoning collection of flying shoes organized", price: 1000, image_url: "https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501280346/drinking-alley-fun-bowling-9379_yza2jr.jpg")
