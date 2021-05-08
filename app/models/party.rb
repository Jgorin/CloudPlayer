class Party < ApplicationRecord
  validates :title, presence: true

  has_many :party_invites
  has_many :party_memberships
  has_many :users, through: :party_memberships
  has_many :songs
end