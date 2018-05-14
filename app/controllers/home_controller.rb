class HomeController < ApplicationController

  def all
    @dailygreats = DailyGreat.all
    render json: @dailygreats
  end
  
end
