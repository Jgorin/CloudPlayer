class PartyInvite < ApplicationRecord
  validates :sender, presence: true
  validates :receiver, presence: true
  validates :party, presence: true

  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"
  belongs_to :party
end