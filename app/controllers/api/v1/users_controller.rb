class Api::V1::UsersController < ApiController

  def show
    
    render json: current_user, serializer: UserShowSerializer
  end

  def search
    query = params["query"]  
    users = User.limit(30).where("email LIKE ? AND id != ?", "#{query}%", current_user)
    render json: users
  end
end