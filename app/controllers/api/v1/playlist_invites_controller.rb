class Api::V1::PlaylistInvitesController < ApiController

  def destroy
    invite = PlaylistInvite.find(params[:id])
    if invite.destroy
      render json: invite
    else
      render json: {errors: "could not destroy invite with id #{params[:id]}"}
    end
  end
end