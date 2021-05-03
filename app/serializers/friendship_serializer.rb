class FriendshipSerializer < ActiveModel::Serializer
  belongs_to :user, class_name: "user"
  belongs_to :friend, class_name: "user"
end