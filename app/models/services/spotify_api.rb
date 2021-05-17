require "base64"

module SpotifyApi

  def self.get_recommendations(session, seed_tracks)
    token = extract_token(session)
    song_ids = extract_ids(seed_tracks)
    response = Faraday.get(
      "https://api.spotify.com/v1/recommendations?seed_tracks=#{song_ids}",
       nil,
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer #{token}"
      }
    )
    return JSON.parse(response.body)["tracks"]
  end

  def self.search(session, query)
    token = extract_token(session)
    response = Faraday.get(
      "https://api.spotify.com/v1/search?",
      { q: query, type: "track" },
      { 
        "Accept": "application/json", 
        "Content-Type": "application/json", 
        "Authorization": "Bearer #{token}" 
      }
    )
    return response.body
  end

  def self.get_album_art(url)
    response = Faraday.get("https://open.spotify.com/oembed?", { url: url })
    return response.body
  end

  def self.get_profile_photo(session, user)
    if user.provider != "spotify"
      return nil
    end
    token = extract_token(session)
    response = Faraday.get(
      "https://api.spotify.com/v1/users/#{user.uid}",
      nil, 
      { 
        "Accept": "application/json",
        "Content-Type": "application/json", 
        "Authorization": "Bearer #{token}" 
      }
    )
    parsedResponse = JSON.parse(response.body)
    return parsedResponse["images"][0]["url"]
  end

  def self.create_user_playlist(session, user, playlist_title)
    if user == nil
      return
    end
    token = extract_token(session)
    response = Faraday.post(
      "https://api.spotify.com/v1/users/#{user.uid}/playlists",
      JSON.generate({name: playlist_title}),
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer #{token}"
      }
    )
    return JSON.parse(response.body)
  end

  def self.get_user_playlists(session, user, token)
    if user == nil
      return
    end
    response = Faraday.get(
      "https://api.spotify.com/v1/users/#{user.uid}/playlists",
      nil,
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer #{token}"
      }
    )

    return JSON.parse(response.body)["items"]
  end

  def self.add_songs_to_playlist(session, playlist_id, songs)
    token = extract_token(session)
    song_uris = extract_uris(songs)
    response = Faraday.post(
      "https://api.spotify.com/v1/playlists/#{playlist_id}/tracks",
      JSON.generate({"uris": song_uris}), 
      {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer #{token}"
      }
    )
  end

  def self.refresh_token(session)

    response = Faraday.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "refresh_token",
        refresh_token: session[:credentials]["refresh_token"],
      },
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "basic #{Base64.encode64(ENV["SPOTIFY_CLIENT_ID"])}:#{Base64.encode64(ENV["SPOTIFY_SECRET"])}"
      }
    )
    binding.pry
  end

  private

  def self.extract_ids(songs)
    song_ids = songs.each_with_index.map do |song, index|
      if index == songs.length - 1
        "#{song["id"]}"
      else
        "#{song["id"]},"
      end
    end
    return song_ids.join("")
  end

  def self.extract_token(session)
    return session["credentials"]["token"]
  end

  def self.extract_uris(songs)
    uris = songs.map do |song|
      song.uri
    end
    return uris
  end
end