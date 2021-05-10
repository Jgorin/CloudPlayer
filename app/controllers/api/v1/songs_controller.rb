class Api::V1::SongsController < ApiController
  def search
    token = session[:credentials]["token"]
    query = params[:query]
    response = Faraday.get("https://api.spotify.com/v1/search?", { q: query, type: "track" }, { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer #{token}" })
    render json: response.body
  end

  def get_album_art
    uri = params[:trackUri]
    response = Faraday.get("https://open.spotify.com/oembed?", { url: uri })
    render json: response.body
  end
end