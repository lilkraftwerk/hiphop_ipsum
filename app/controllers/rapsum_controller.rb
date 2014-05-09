class RapsumController < ApplicationController
  def get
    current_ipsum = IpsumText.new(params).get_ipsum
    render :json => current_ipsum
  end
end