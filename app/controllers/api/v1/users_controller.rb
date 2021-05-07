class Api::V1::UsersController < ApiController
  def show
    render json: current_user, serializer: UserShowSerializer
  end

  def search
    query = params["query"]  
    users = User.limit(30).where("lower(username) LIKE ? AND id != ?", "#{query.downcase}%", current_user)
    render json: users
  end
end