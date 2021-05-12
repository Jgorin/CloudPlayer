class PlaylistMembership < ApplicationRecord
  validates :user, presence: true
  validates :playlist, presence: true
  
  belongs_to :user
  belongs_to :playlist
end