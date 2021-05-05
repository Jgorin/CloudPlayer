class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :friend_requests, :friendships
  has_many :friend_requests
  has_many :friendships
end
