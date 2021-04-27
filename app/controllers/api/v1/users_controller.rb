class Api::V1::UsersController < ApiController
  def show
    response = {}
    user = User.find(params[:id])
    current_user = User.find(session[:current_user_id])
    response["user"] = user
    response["friends"] = user.friends
    response["friend_requests"] = user.friend_requests
    response["current_user"] = current_user
    response["current_user_friends"] = current_user.friends
    response["current_user_friend_requests"] = current_user.friend_requests
    render json: response
  end

  def search
    searchValue = params["searchValue"]  
    users = User.where("email LIKE ? AND id != ?", "%#{searchValue}%", session[:current_user_id])
    render json: users
  end
end