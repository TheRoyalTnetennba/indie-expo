class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      if user_params[:password].length < 6
        render json: ["Password must be at least 6 characters"], status: 422
      else
        render json: ["All fields must be filled."], status: 422
      end
    end
  end

  def show
    @user ||= User.find(params[:id])
    render template: "api/users/show"
  end

  def user_params
    params.require(:user).permit(:id, :bio, :first_name, :last_name, :password, :image_url, :email, :session_token)
  end
end
