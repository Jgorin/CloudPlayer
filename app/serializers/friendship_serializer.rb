class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :user, :friend
  belongs_to :user, class_name: "user"
  belongs_to :friend, class_name: "user"
end