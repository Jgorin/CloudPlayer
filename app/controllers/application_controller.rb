class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  respond_to :json, :html
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || root_path
  end 

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :profile_photo)}
  end

  def after_sign_in_path_for(resource)
    "/users/#{current_user.id}/"
  end

  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to "/"
    end
  end
end
