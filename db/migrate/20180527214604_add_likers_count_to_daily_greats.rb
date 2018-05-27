class AddLikersCountToDailyGreats < ActiveRecord::Migration[5.1]
  def change
    add_column :daily_greats, :likers_count, :integer, :default => 0
  end
end
