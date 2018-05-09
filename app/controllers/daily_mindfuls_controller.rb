class DailyMindfulsController < ApplicationController
  def index
    render json: DailyMindful.all
  end
end
