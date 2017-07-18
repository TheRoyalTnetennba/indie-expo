class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= @user.find_by(session_token: session[:session_token])
  end
  
end
