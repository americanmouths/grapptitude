class DailyGreatsController < ApplicationController

  def index
    dailygreats = current_user.daily_greats.order(id: :desc)
    render json: dailygreats, status: 200
  end

  def create
    if current_user
      dailygreat = DailyGreat.create(content: params[:content], user_id: params[:user_id])
      if dailygreat.save
        render json: dailygreat, status: 200
      end
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
    dailygreat = DailyGreat.find(params[:id])
    if dailygreat.is_likeable? && !current_user.likees(DailyGreat).include?(dailygreat)
      current_user.like!(dailygreat)
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

  def test
    dailygreat = DailyGreat.find(params[:id])
    current_user.like!(dailygreat)
    dailygreat.increment!(:likers_count)
    dailygreats = DailyGreat.where(user_id: current_user.followees(User)).order(id: :desc)
    render json: dailygreats, status: 200
  end

end
