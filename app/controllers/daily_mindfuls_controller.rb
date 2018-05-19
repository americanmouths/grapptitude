class DailyMindfulsController < ApplicationController
  def index
    @mindfuls = DailyMindful.all
    @random_mindful = @mindfuls.sample
    render json: @random_mindful, status: 200
  end
end
