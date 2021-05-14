class Song < ApplicationRecord
  validates :uri, presence: true
  validates :name, presence: true
  validates :album, presence: true
  validates :artist, presence: true

  belongs_to :submission

  def self.create_songs(songs, submission)
    created_songs = []
    songs.each do |song|
      created_songs.push(
        self.create(
          uri: song["uri"], 
          name: song["name"], 
          album: song["album"]["name"], 
          artist: song["artists"][0]["name"], 
          submission: submission
        )
      )
    end
  end
end