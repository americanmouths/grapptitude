class User < ApplicationRecord
  has_secure_password
  act_as_followable
  act_as_follower
  act_as_liker
  has_many :daily_greats
end
