class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= @user.find_by(session_token: session[:session_token])
  end

  def login(user)
    @user = user
    session[:session_token] = @user.reset_session_token if @user
  end

  def logout
    @current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

  def logged_in?
    !!current_user
  end

end
