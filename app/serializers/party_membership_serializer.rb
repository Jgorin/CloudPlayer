class PlaylistMembershipSerializer < ActiveModel::Serializer
  attributes :id, :user, :playlist
  belongs_to :user
  belongs_to :playlist
end