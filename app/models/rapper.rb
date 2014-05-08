class Rapper < ActiveRecord::Base
  has_many :lines

  def get_lines
    results = RapGenius.search_by_artist(self.name)
    results.each do |song|
      song.lines.each do |current_line|
      self.lines << Line.create(content: current_line.lyric) if current_line.lyric.length > 10
      end
    end
  end

  def ipsum
    ipsum = IpsumText.new(self)
    ipsum.generate_paragraphs
  end

end