require_relative "../../../models/services/spotify_api"

class Api::V1::SubmissionsController < ApiController
  
  def create
    invite = PlaylistInvite.find(params[:playlist_invite_id])
    song_inputs = params[:songs]
    songs = SpotifyApi.get_recommendations(session, song_inputs)
    playlist = invite.playlist
    render json: playlist.submit_songs(invite, songs)
  end
end