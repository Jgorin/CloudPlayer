class PlaylistInviteSerializer < ActiveModel::Serializer
  attributes :id, :receiver, :sender, :playlist
  belongs_to :receiver
  belongs_to :sender
end