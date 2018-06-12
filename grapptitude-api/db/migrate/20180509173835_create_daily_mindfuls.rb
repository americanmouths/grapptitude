class CreateDailyMindfuls < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_mindfuls do |t|
      t.text :content

      t.timestamps
    end
  end
end
