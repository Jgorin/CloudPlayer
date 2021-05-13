class Api::V1::PlaylistsController < ApiController

  def show
    render json: Playlist.find(params[:id]), serializer: PlaylistShowSerializer
  end

  def create
    user = User.find(params[:user_id])
    playlistTitle = params[:title]
    invitedIds = params[:invites]
    if user
      playlist = Playlist.new(title: playlistTitle)
      if !playlist.save
        render_errors(playlist)
      else
        inviteHost = PlaylistInvite.create(sender: user, receiver: user, playlist: playlist)
        if !inviteHost.save
          render_errors(invite)
        else
          if invitedIds.length > 0
            invitedUsers = User.find(invitedIds)
            invitedUsers.each do |invitedUser|
              invite = PlaylistInvite.create(sender: user, receiver: invitedUser, playlist: playlist)
            end
          end
          render json: inviteHost
        end
      end
      
    else
      render json: { error: "Could not find user with id #{params[:user]}" }
    end
  end

  private

  def render_errors(item)
    render json: { error: item.errors.full_messages.to_sentence }
  end

end

