class Api::V1::SubmissionsController < ApiController
  def create
    user = User.find(params[:user_id])
    invite = PlaylistInvite.find(params[:playlist_invite_id])
    playlist = invite.playlist
    songs = params[:songs]
    song_ids = songs.each_with_index.map do |song, index|
      if index == songs.length - 1
        "#{song["id"]}"
      else
        "#{song["id"]},"
      end
    end
    song_ids = song_ids.join("")
    spotify_recommendations = get_recommendations(song_ids)
    submission = Submission.new(user: user, playlist: playlist)
    if submission.save && invite.destroy
      create_songs(spotify_recommendations, submission)
      render json: playlist
    else
      render json: { errors: submission.errors.full_messages.to_sentence }
    end
  end

  private

  def get_recommendations(ids)
    response = Faraday.get("https://api.spotify.com/v1/recommendations?seed_tracks=#{ids}", nil, { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer #{session[:credentials]["token"]}" })
    return JSON.parse(response.body)
  end

  def create_songs(recommendations, submission)
    songs = []
    recommendations["tracks"].each do |track|
      songs << Song.create(uri: track["uri"], name: track["name"], album: track["album"]["name"], artist: track["artists"][0]["name"], submission: submission)
    end
  end
end