class DailyGreatsController < ApplicationController
  before_action :authenticate_user

  def index
    @dailygreats = current_user.daily_greats
    render json: @dailygreats
  end

end
