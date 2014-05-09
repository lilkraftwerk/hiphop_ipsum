class RapsumController < ApplicationController

  def get
    puts params
    puts "imgay"
    @rapper = Rapper.find(1)
    @ipsum = @rapper.ipsum(3).join("")
    @ipsum
    render layout: false
  end
end