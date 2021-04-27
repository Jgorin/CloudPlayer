class Api::V1::FriendRequestsController < ApiController
  def create
    receiver = User.find(params[:user_id])
    sender = User.find(params[:current_user])
    request = FriendRequest.new(sender: sender, receiver: receiver)
    if request.save
      flash.now[:message] = "Friend request sent"
      render json: {sender: sender, receiver: receiver}
    else
      flash.now[:error] = request.errors.full_messages.to_sentence
    end
  end
end