class Api::V1::SongsController < ApiController

  def create
    user = User.find(params[:user_id])
    party = Party.find(params[:party_id])
    songDetails = params[:song]
    if user && party
      song = Song.new(name: songDetails["name"], album_name: songDetails["album_name"], uid: songDetails["uid"], uri: songDetails["uri"], user: user, party: party)
      if song.save
        render json: song
      else
        render json: { error: "couldnt save song...#{song.errors.full_messages.to_sentence}" }
      end
    else 
      render json: { error: "Could not find party/user..." }
    end
  end

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
    response = Faraday.get("https://api.spotify.com/v1/search?", { q: query, type: "track" }, { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer #{token}" })
    render json: response.body
  end

  def get_album_art
    uri = params[:trackUri]
    response = Faraday.get("https://open.spotify.com/oembed?", { url: uri })
    render json: response.body
  end

  private
end