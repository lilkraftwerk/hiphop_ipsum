
rappers = ["50 Cent", "A Tribe Called Quest", "Beastie Boys", "Chief Keef", "DMX", "Danny Brown", "Dr. Dre", "Gang Starr", "Ghostface", "Juvenile", "Kanye West", "Lil B", "Lil Wayne", "MF Doom", "Notorious B.I.G.", "Outkast", "Slick Rick", "Trick Daddy", "UGK", "Wu-Tang Clan", "Young Jeezy"]

def generate_filename(rapper_name)
  rapper_name.gsub!(/\W/, "")
  "#{rapper_name.downcase}.jpg"
end

rappers.each {|rapper| Rapper.create(name: rapper, filename: generate_filename(rapper))}



Rapper.all.each do |current_rapper|
  puts current_rapper.name
  puts current_rapper.filename
  current_rapper.get_lines
end