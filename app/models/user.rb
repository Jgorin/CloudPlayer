class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :party_invites, foreign_key: "receiver_id"
  has_many :party_memberships
  has_many :parties, through: :party_memberships
  has_many :friendships
  has_many :friends, foreign_key: "friend_id", through: :friendships
  has_many :friend_requests, foreign_key: "receiver_id"

  def friendships
    friendships_user = Friendship.where(user: self).to_ary
    friendships_friend = Friendship.where(friend: self).to_ary
    friendships = friendships_user.concat(friendships_friend)
    return friendships
  end

  def friend_requests
    out_friend_requests = FriendRequest.where(sender: self).to_ary
    in_friend_requests = FriendRequest.where(receiver: self).to_ary
    friend_requests = out_friend_requests.concat(in_friend_requests)
    return friend_requests
  end

  def friends
    friendships = self.friendships
    friend_ids = []
    friendships.each do |friendship|
      if friendship.user.id == self.id
        friend_ids << friendship.friend.id
      else
        friend_ids << friendship.user.id
      end
    end
    return User.find(friend_ids)
  end
end
