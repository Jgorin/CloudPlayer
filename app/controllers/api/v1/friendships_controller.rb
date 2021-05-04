class Api::V1::FriendshipsController < ApiController
  def destroy
    outgoing_friendship = Friendship.where(user: params[:id], friend: params[:user_id]).first
    incoming_friendship = Friendship.where(user: params[:user_id], friend: params[:id]).first
    friendship = nil
    if outgoing_friendship != nil
      friendship = outgoing_friendship
    else
      friendship = incoming_friendship
    end
    if friendship.destroy
      render json: {currentUser: params[:id], user: params[:user_id]}
    else
      render json: {error: "error... could not find friendship that matched those Ids"}
    end
  end

  def index
    user = User.find(params[:user_id])
    render json: user.friends
  end
end
