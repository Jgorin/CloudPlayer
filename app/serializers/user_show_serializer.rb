class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :profile_photo, :provider, :friend_requests, :friendships, :playlist_invites, :playlists
  has_many :friend_requests
  has_many :friendships
  has_many :playlist_invites
  has_many :submissions
  has_many :playlists, through: :submissions
end
