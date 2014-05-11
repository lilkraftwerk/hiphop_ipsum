class Line < ActiveRecord::Base
  belongs_to :rapper

  def self.random_line
    Line.find(rand(Line.count)).content
  end

end