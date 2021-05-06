class PartyMembership < ApplicationRecord
  validates :user, presence: true
  validates :party, presence: true
  
  belongs_to :user
  belongs_to :party
end