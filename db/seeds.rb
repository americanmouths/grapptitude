# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mindfuls = [
  "Spend 10 minutes outside today.",
  "Pick a corner in your room to deep clean.",
  "Go for a walk without your phone."
]

mindfuls.map do |mindful|
  DailyMindful.create(content: mindful)
end
