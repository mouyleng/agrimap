# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.find_or_initialize_by(email: 'admin@ilabsea.org')
user.password = 'password'
user.password_confirmation = 'password'
user.role='admin'
user.save

user = User.find_or_initialize_by(email: 'super@ilabsea.org')
user.password = 'password'
user.password_confirmation = 'password'
user.role='super_admin'
user.save

user = User.find_or_initialize_by(email: 'mouyleng@instedd.org')
user.password = 'mouyleng123'
user.password_confirmation = 'mouyleng123'
user.role='super_admin'
user.save
