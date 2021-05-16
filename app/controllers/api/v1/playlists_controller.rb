require_relative "../../../models/services/spotify_api"

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
        invite = PlaylistInvite.create(sender: user, receiver: user, playlist: playlist)
        playlist.send_invites(user, invitedIds)
        render json: invite
      end 
    else
      render json: { error: "Could not find user with id #{params[:user]}" }
    end
  end

  def export
    user = User.find(params[:user_id])
    playlist = Playlist.find(params[:playlist_id])
    songs = playlist.songs.shuffle(random: Random.new(1))
    spotify_playlist = SpotifyApi.create_user_playlist(session, user, params[:playlist_title])
    SpotifyApi.add_songs_to_playlist(session, spotify_playlist["id"], songs)
  end

  private

  def render_errors(item)
    render json: { error: item.errors.full_messages.to_sentence }
  end
end

