class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :friend_requests, :friendships, :party_invites, :parties
  has_many :friend_requests
  has_many :friendships
  has_many :party_invites
  has_many :parties
end
