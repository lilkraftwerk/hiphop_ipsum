class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def new
    @rapper = Rapper.new
  end

  def show
    @rapper = Rapper.find(params[:id])
    if @rapper.lines.count == 0
      @rapper.get_lines
    end
    @ipsum = @rapper.ipsum
  end

  def create
    @rapper = Rapper.new(rapper_params)
    @rapper.save
  end

  private

  def rapper_params
      params.require(:rapper).permit(:name)
    end

end