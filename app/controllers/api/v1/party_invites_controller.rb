class Api::V1::PartyInvitesController < ApiController
  def accept
    user = User.find(params[:user_id])
    invite = PartyInvite.find(params[:invite_id])
    party = invite.party
    if user && invite.destroy
      membership = PartyMembership.new(user: user, party: party)
      if membership.save
        render json: party
      else
        render json: {errors: membership.errors.full_messages.to_sentence}
      end
    else
      render json: { errors: "Could not find user or party" }
    end
  end

  def destroy
    invite = PartyInvite.find(params[:id])
    if invite.destroy
      render json: invite
    else
      render json: {errors: "could not destroy invite with id #{params[:id]}"}
    end
  end
end