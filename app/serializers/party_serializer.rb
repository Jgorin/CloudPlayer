class PartySerializer < ActiveModel::Serializer
  attributes :id, :title, :users, :party_invites
  has_many :party_invites
end