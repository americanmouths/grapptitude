class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :daily_greats
end
