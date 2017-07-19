class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user ||= User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:id, :bio, :first_name, :last_name, :password, :image_url, :email, :session_token)
  end
end
