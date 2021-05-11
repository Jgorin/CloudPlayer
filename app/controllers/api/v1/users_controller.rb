class Api::V1::UsersController < ApiController
  def show
    render json: current_user, serializer: UserShowSerializer
  end

  def search
    query = params["query"]  
    users = User.limit(30).where("lower(username) LIKE ? AND id != ?", "#{query.downcase}%", current_user)
    render json: users
  end

  def current_user_token
    render json: { token: session[:credentials]["token"] }
  end

  def set_playback
    response = Faraday.put("https://api.spotify.com/v1/me/player", JSON.generate({device_ids:[params[:device_id]]}), { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer #{session[:credentials]["token"]}" })
    render json: response
  end
end