class CreateDailyGreats < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_greats do |t|
      t.text :content
      t.integer :user_id

      t.timestamps
    end
  end
end
