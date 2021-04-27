class Api::V1::FriendRequestsController < ApiController

  def create
    find_users(params[:user_id], params[:current_user])
    request = FriendRequest.new(sender: @sender, receiver: @receiver)
    if request.save
      render_changes
    else
      render_errors
    end
  end

  def destroy
    find_users(params[:user_id], params[:id])
    request = FriendRequest.where(sender: @sender, receiver: @receiver).first
    if FriendRequest.destroy(request.id)
      render_changes
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