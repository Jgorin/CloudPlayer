class Party < ApplicationRecord
  has_many :party_invites
  has_many :party_memberships
  has_many :users, through: :party_memberships
end