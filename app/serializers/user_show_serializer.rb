class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :friends, :friend_requests
  has_many :friends, foreign_key: "friend_id", through: :friendships
  has_many :friend_requests
end
