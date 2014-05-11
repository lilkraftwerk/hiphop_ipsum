class RapperConstructor

def initialize(rapper_name)
  @name = rapper_name
  generate_filename
  @rapper = Rapper.create(name: @name, filename: @filename)
  @rapper.get_lines
  report
end

def generate_filename
  @filename = @name.gsub(/\W/, "")
  @filename = "#{@filename.downcase}.jpg"
end

def report
  puts "Rapper created: #{@rapper.name} / #{@rapper.filename}"
  puts "Lines for #{@rapper.name}: #{@rapper.lines.count}"
end
end