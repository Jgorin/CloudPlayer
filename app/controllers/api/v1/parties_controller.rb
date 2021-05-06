class Api::V1::PartiesController < ApiController
  def create
    user = User.find(params[:user_id])
    invitedIds = params[:invites]
    if user
      party = Party.new()
      if !party.save
        render_errors(party)
      end
      membership = PartyMembership.new(user: user, party: party)
      if !membership.save
        render_errors(membership)
      end
    else
      render json: { error: "Could not find user with id #{params[:user]}" }
    end
    if invitedIds.length > 0
      invitedUsers = User.find(invitedIds)
      invitedUsers.each do |invitedUser|
        invite = PartyInvite.create(sender: user, receiver: invitedUser, party: party)
      end
    end
    render json: party
  end
end

private

def render_errors(item)
  render json: { error: item.errors.full_messages.to_sentence }
end