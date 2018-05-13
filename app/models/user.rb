class User < ApplicationRecord
  has_secure_password
  acts_as_followable
  acts_as_follower
  acts_as_liker
  has_many :daily_greats

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, presence: true
end
