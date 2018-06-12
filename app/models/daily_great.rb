class DailyGreat < ApplicationRecord
  acts_as_likeable
  belongs_to :user
  
end
