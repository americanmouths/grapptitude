class DailyGreatSerializer < ActiveModel::Serializer
  attributes :id, :content, :date_created, :likers_count, :user_id
  belongs_to :user

  def date_created
    object.created_at.strftime("%m-%d-%Y")
  end

end
