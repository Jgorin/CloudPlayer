class PartyMembershipSerializer < ActiveModel::Serializer
  attributes :id, :user, :party
  belongs_to :user
  belongs_to :party
end