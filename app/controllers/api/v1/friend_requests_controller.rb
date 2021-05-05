class Api::V1::FriendRequestsController < ApiController

  def create
    @receiver = User.find(params[:receiver])
    @sender = User.find(params[:user_id])
    request = FriendRequest.new(sender: @sender, receiver: @receiver)
    if request.save
      render json: request
    else
      render_errors
    end
  end

  def destroy
    friend_request = FriendRequest.find(params[:id])
    if FriendRequest.destroy(params[:id])
      render json: friend_request
    else
      render_not_found
    end
  end

  def accept
    request = FriendRequest.find(params[:friend_request])
    friend = request.sender
    user = request.receiver
    friendship = Friendship.new(user: user, friend: friend)
    if FriendRequest.destroy(request.id) && friendship.save
      render json: friendship
    else
      render_not_found
    end
  end

  private

    def find_users(receiver_id, sender_id)
      @receiver = User.find(receiver_id)
      @sender = User.find(sender_id)
    end

    def render_changes
      render json: {sender: @sender, receiver: @receiver}
    end

    def render_errors
      render json: { errors: @request.errors.full_messages.to_sentence }
    end

    def render_not_found
      render json: { errors: "Could not find friend request..." }
    end
end