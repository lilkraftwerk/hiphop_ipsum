
rappers = ["50 Cent", "A Tribe Called Quest", "Beastie Boys", "Chief Keef", "DMX", "Danny Brown", "Dr. Dre", "Gang Starr", "Ghostface", "Juvenile", "Kanye West", "Lil B", "Lil Wayne", "MF Doom", "Notorious B.I.G.", "Outkast", "Slick Rick", "Trick Daddy", "UGK", "Wu-Tang Clan", "Young Jeezy"]

rappers.each {|rapper| Rapper.create(name: rapper, filename: rapper.join("").downcase)}

def generate_filename(rapper)
  rapper.gsub!(/\W/, "")
  "#{rapper.downcase}.jpg"
end

Rapper.all.each do |current_rapper|
  current_rapper.get_lines
end