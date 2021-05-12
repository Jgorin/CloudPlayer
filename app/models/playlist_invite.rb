class PlaylistInvite < ApplicationRecord
  validates :sender, presence: true
  validates :receiver, presence: true
  validates :playlist, presence: true

  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"
  belongs_to :playlist
end