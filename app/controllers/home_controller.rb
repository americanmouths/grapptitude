class HomeController < ApplicationController

  def all
    render json: DailyGreat.all, status: 200
  end

end
