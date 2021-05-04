class Api::V1::UsersController < ApiController
  
  def show
    user = User.find(params[:id])
    users = [user, current_user]
    render json: users, each_serializer: UserShowSerializer
  end

  def search
    searchValue = params["searchValue"]  
    users = User.where("email LIKE ? AND id != ?", "%#{searchValue}%", session[:current_user_id])
    render json: users
  end
end