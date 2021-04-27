class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships
  has_many :friends, through: :friendships
  has_many :friend_requests, -> { distinct }

  def friends
    friendships_user = Friendship.where(user: self).to_ary
    friendships_friend = Friendship.where(friend: self).to_ary
    friend_ids = []
    if friendships_user.length > 0
      friendships_user.each do |f|
        friend_ids << f.friend_id
      end
    end
    if friendships_friend.length > 0
      friendships_friend.each do |f|
        friend_ids << f.user_id
      end
    end
    return User.find(friend_ids)
  end

  def friend_requests
    out_friend_requests = FriendRequest.where(sender: self).to_ary
    in_friend_requests = FriendRequest.where(receiver: self).to_ary
    receiver_ids = []
    sender_ids = []
    if out_friend_requests.length > 0
      out_friend_requests.each do |request|
        receiver_ids << request.receiver_id
      end
    end
    if in_friend_requests.length > 0
      in_friend_requests.each do |request|
        sender_ids << request.sender_id
      end
    end
    senders = User.find(sender_ids)
    receivers = User.find(receiver_ids)
    return {incoming: senders, outgoing: receivers}
  end
end
