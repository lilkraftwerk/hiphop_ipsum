
rappers = ["Danny Brown", "Ghostface", "Kanye West", "A Tribe Called Quest", "Biggie", "Eminem", "Common", "Iamsu!", "Lil B", "50 Cent", "YG", "DMX", "Young Jeezy"]

rappers.each {|rapper| Rapper.create(name: rapper)}

Rapper.all.each do |current_rapper|
  current_rapper.get_lines
end