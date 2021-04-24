class Api::V1::UsersController < ApiController
  def show
    response = {}
    user = User.find(params[:id])
    response["user"] = user
    response["friends"] = user.friends
    response["current_user_id"] = session[:current_user_id]
    if user.avatar.attached?
      response[:avatar_url] = url_for(user.avatar)
      render json: response
    else
      render json: response
    end
  end

  def send_friend_request
    parsedBody = JSON.parse(request.body.read)
    receiver_id = parsedBody["receiver_id"]
    sender_id = parsedBody["sender_id"]
    any_request_from_sender = FriendRequest.where(["sender_id = ? and receiver_id = ?", sender_id, receiver_id])
    any_request_from_receiver = FriendRequest.where("sender_id = ? and receiver_id = ?", receiver_id, sender_id)
    if any_request_from_receiver == nil && any_request_from_sender == nil
      FriendRequest.create(sender_id: sender_id, receiver_id: receiver_id)
    end
  end

  def search
    searchValue = params["searchValue"]  
    users = User.where("email like ?", "%#{searchValue}%")
    render json: users
  end
end