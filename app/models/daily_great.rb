class DailyGreat < ApplicationRecord
  act_as_likeable
  belongs_to :user
end
