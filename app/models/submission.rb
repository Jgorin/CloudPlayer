class Submission < ApplicationRecord
  belongs_to :playlist
  belongs_to :user
  has_many :songs
end