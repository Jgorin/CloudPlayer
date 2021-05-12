class Api::V1::PlaylistInvitesController < ApiController
  def accept
    user = User.find(params[:user_id])
    invite = PlaylistInvite.find(params[:invite_id])
    playlist = invite.playlist
    if user && invite.destroy
      membership = PlaylistMembership.new(user: user, playlist: playlist)
      if membership.save
        render json: playlist
      else
        render json: {errors: membership.errors.full_messages.to_sentence}
      end
    else
      render json: { errors: "Could not find user or playlist" }
    end
  end

  def destroy
    invite = PlaylistInvite.find(params[:id])
    if invite.destroy
      render json: invite
    else
      render json: {errors: "could not destroy invite with id #{params[:id]}"}
    end
  end
end