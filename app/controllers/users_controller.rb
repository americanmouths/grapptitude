class UsersController < ApplicationController

  def create
    user = User.new(username: params[:username], password: params[:password])

    if user.save
      token = issue_token({user_id: user.id})
      render json: { user: user, token: token }
    else
      render json: { errors: { user: "Usernames must be unique, please try again." }}
    end
  end
end
