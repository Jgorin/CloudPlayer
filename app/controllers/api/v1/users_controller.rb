class Api::V1::UsersController < ApiController

  def show
    user = User.find(params[:id])
    users = [user, current_user]
    render json: users, each_serializer: UserShowSerializer
  end

  def search
    query = params["query"]  
    users = User.limit(30).where("email LIKE ? AND id != ?", "#{query}%", current_user)
    render json: users
  end

  def logged_in_user
    render json: current_user
  end
end