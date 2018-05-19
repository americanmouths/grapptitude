class DailyGreatsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    dailygreats = user.daily_greats
    render json: dailygreats, status: 200
  end

  def create
    @dailygreat = DailyGreat.create(daily_great_params)
    if @dailygreat.valid && @dailygreat.save
      render json: @dailygreat, status: 200
    end
  end

  def show
    @dailygreat = DailyGreat.find_by(id: params[:id])
    render json: @dailygreat, status: 200
  end

  def destroy
    @dailygreat = DailyGreat.find_by(id: params[:id])
    @dailygreat.delete
  end

  def update
    @dailygreat = DailyGreat.find_by(id: params[:id])
    @dailygreat.update(daily_great_params)
    if @dailygreat.save && @dailygreat.valid
      render json: @dailygreat, status: 200
    end
  end

  private
    def daily_great_params
      params.require(:dailygreat).permit(:user_id, :content)
    end
end
