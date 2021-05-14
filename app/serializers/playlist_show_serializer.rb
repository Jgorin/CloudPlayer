class PlaylistShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :songs
  def songs
    object.songs.shuffle(random: Random.new(1))
  end
end