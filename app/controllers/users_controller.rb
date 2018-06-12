class UsersController < ApplicationController

  def create
    user = User.new(username: params[:username], password: params[:password])

    if user.save
      token = issue_token({user_id: user.id})
      render json: { user: user, token: token }
    else
      render json: { errors: { user: "Please enter a valid username & password." }}
    end
  end

  def follow
    current_user = User.find(params[:user_id])
    user = User.find(params[:followee_id])
    if !current_user.follows?(user)
      current_user.follow!(user)
      render json: {
        user: user,
        errors: "Followed!"
      }
    else
      render json: {
        errors: "You already follow this user"
      }
    end
  end

  def followers
    user = User.find(params[:user_id])
    followergreats = DailyGreat.where(user_id: user.followees(User))
    render json: followergreats, status: 200
  end

  def followees
    current_user = User.find(params[:user_id])
    if !current_user.followers(User).nil?
      followees = current_user.followers(User)
      render json: followees, status: 200
    else
      render json: {
        errors: "You don't have any followers yet"
      }
    end
  end
end
