class Playlist < ApplicationRecord
  validates :title, presence: true

  has_many :playlist_invites
  has_many :submissions
  has_many :users, through: :submissions
  has_many :songs, through: :submissions

  def submit_songs(invite, songs)
    user = invite.receiver
    submission = Submission.new(user: user, playlist: self)
    if submission.save && invite.destroy
      Song.create_songs(songs, submission)
      return self
    else
      return { errors: submission.errors.full_messages.to_sentence }
    end
  end

  def send_invites(user, ids)
    users = User.find(ids)
    invites = []
    users.each do |invited_user|
      invites << PlaylistInvite.create(sender: user, receiver: invited_user, playlist: self)
    end
    return invites
  end
end