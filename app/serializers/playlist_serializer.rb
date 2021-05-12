class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :songs
  has_many :submissions
  has_many :songs, through: :submissions
end