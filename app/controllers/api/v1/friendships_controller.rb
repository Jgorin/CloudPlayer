class Api::V1::FriendshipsController < ApiController
  def destroy
    friendship = Friendship.find(params[:id])
    if friendship.destroy
      render json: friendship
    else
      render json: {errors: "error, could not find friendship..."}
    end
  end
end
