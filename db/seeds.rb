# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
guest = User.create(password: 'asdfoa2345ijdsofijaoesif1234jaowiejfo', email: 'guestUser@IndieExpo.com', bio: 'The Architect', first_name: 'Graham', last_name: 'Paye')
user1 = User.create(password: 'test1234', email: 'gpaye8@gmail.com', bio: 'the architect', first_name: 'Graham', last_name: 'Paye')
