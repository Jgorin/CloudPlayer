class Api::V1::PartiesController < ApiController

  def show
    render json: Party.find(params[:id]), serializer: PartyShowSerializer
  end

  def create
    user = User.find(params[:user_id])
    partyTitle = params[:title]
    invitedIds = params[:invites]
    if user
      party = Party.new(title: partyTitle, token: session["credentials"]["token"])
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

  def playback_controls
    response = Faraday.get("https://api.spotify.com/v1/me/player", nil, { "Authorization": "Bearer #{session[:credentials]["token"]}" })
    render json: JSON.parse(response.body)
  end

  private

  def render_errors(item)
    render json: { error: item.errors.full_messages.to_sentence }
  end

end

