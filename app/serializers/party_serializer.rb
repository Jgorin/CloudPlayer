class PartySerializer < ActiveModel::Serializer
  attributes :id, :users, :party_invites
  has_many :party_invites
end