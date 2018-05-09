class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.valid && @user.save
      render json: @user, status: 200
    end
  end

  def show
    render json: @user
  end

  private
  def
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  end
end
