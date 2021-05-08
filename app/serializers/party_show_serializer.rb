class PartyShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :users, :party_invites, :current_user
  has_many :party_invites
end