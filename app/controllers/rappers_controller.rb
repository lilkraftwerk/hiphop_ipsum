class RappersController < ApplicationController
  def index
    @rappers = Rapper.all
  end

  def create
    @rapper = Rapper.find(params[:rapper][:id])
    @ipsum = @rapper.ipsum(params[:paras])
    render :show
  end

  private

  def rapper_params
      params.require(:rapper).permit(:name)
    end

end