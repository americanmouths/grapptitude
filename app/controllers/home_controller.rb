class HomeController < ApplicationController

  def all
    render json: DailyGreat.all.order(id: :desc), status: 200
  end

end
