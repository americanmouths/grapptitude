class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = issue_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: { errors:  {user: "Wrong username or password. Please try again or sign up."}}
    end
  end

end
