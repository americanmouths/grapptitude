class DailyGreatsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    dailygreats = user.daily_greats.order(id: :desc)
    render json: dailygreats, status: 200
  end

  def create
    dailygreat = DailyGreat.create(content: params[:content], user_id: params[:user_id])
    if dailygreat.save
      render json: dailygreat, status: 200
    end
  end

  def show
    @dailygreat = DailyGreat.find_by(id: params[:id])
    render json: @dailygreat, status: 200
  end

  def destroy
    if current_user
      dailygreat = DailyGreat.find_by(id: params[:daily_great_id])
      dailygreat.destroy
      render json: {
        userGreats: current_user.daily_greats.order(id: :desc),
        message: {
          type: "success",
          text: "Daily great removed"
        }
      }
    else
      render json: {errors: "You are not authorized to delete this great"}
    end
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
      params.require(:daily_great).permit(:user_id, :content)
    end
end
