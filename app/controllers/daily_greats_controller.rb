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

  def destroy
    if current_user
      dailygreat = DailyGreat.find_by(id: params[:daily_great_id])
      dailygreat.destroy
      dailygreats = current_user.daily_greats.order(id: :desc)
      render json: dailygreats, status: 200
    end
  end

  def like
    user = User.find(params[:user_id])
    dailygreat = DailyGreat.find(params[:id])
    if dailygreat.is_likeable? && !user.likees(DailyGreat).include?(dailygreat)
      user.like!(dailygreat)
      render json: {
        dailygreat: dailygreat,
        errors: "Liked!"
      }
    else
      render json: {errors: "You have already liked this post"}
    end
  end

  def liked
    user = User.find(params[:user_id])
    likedgreats = user.likees(DailyGreat.order(id: :desc))
    render json: likedgreats, status: 200
  end

end
