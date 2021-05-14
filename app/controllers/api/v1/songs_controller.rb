require_relative "../../../models/services/spotify_api"

class Api::V1::SongsController < ApiController

  def destroy
    song = Song.find(params[:id])
    if song.destroy
      render json: song
    else
      render json: { error: "couldnt destroy song..." }
    end
  end

  def search
    token = session[:credentials]["token"]
    query = params[:query]
    results = SpotifyApi.search(session, query)
    render json: results
  end

  def get_album_art
    url = params[:trackUri]
    album_details = SpotifyApi.get_album_art(url)
    render json: album_details
  end

  private
end