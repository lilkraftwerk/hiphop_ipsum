# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

rappers = ["Danny Brown", "Ghostface", "Kanye West", "A Tribe Called Quest", "Biggie", "Eminem", "Common", "Iamsu!", "Lil B", "50 Cent", "YG", "DMX"]

rappers.each {|rapper| Rapper.create(name: rapper)}

Rapper.all.each do |current_rapper|
  current_rapper.get_lines
end