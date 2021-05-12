class Playlist < ApplicationRecord
  validates :title, presence: true

  has_many :playlist_invites
  has_many :submissions
  has_many :users, through: :submissions
  has_many :songs, through: :submissions
end