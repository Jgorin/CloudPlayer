class Api::V1::UsersController < ApiController
  def show
    user = User.find(params[:id])
    friends = user.friends
    current_user_id = session[:current_user_id]

    response = {
      user: user,
      friends: friends,
      current_user: current_user_id
    }
    
    if user.avatar.attached?
      response[:avatar_url] = url_for(user.avatar)
      render json: response
    else
      render json: response
    end
  end
end