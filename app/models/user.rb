class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :friendships
  has_many :friends, through: :friendships

  has_one_attached :avatar

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
end
