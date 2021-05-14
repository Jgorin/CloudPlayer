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
end