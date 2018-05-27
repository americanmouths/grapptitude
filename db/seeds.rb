# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mindfuls = [
  "spend 10 minutes outside.",
  "pick a corner of your room to deep clean.",
  "go for a walk without your phone.",
  "read a good novel.",
  "go on an adventure.",
  "call an old friend.",
  "meditate.",
  "start that project that you have been putting off.",
  "watch a funny movie.",
  "let go of whatever is holding you back.",
  "learn to say 'thank you' and 'you're welcome' in another language.",
  "find a quiet spot in a park and lie on your back.",
  "forgive yourself.",
  "treat yourself to a good meal and tell the staff how much you appreciate it.",
  "learn to cook something new.",
  "turn off all your devices, light some candles and sit back with a good book.",
  "call your mom or dad and tell them you love them.",
  "compliment somebody.",
  "make a new friend.",
  "find something to be thankful for.",
  "focus on your breath.",
  "practice forgiveness.",
  "practice patience.",
  "sit in the quiet of your house in the middle of the day and let your mind wander.",
  "take a relaxing bath.",
  "take a trip alone to a garden and make note of all the species.",
  "find somewhere quiet.",
  "learn to cook something new.",
  "take a trip to the zoo and have silent conversations with the animals.",
  "learn 'hello' and 'good bye' in another language.",
  "write yourself a poem about your favorite memory.",
  "read a good love poem.",
  "practice self care."
]

mindfuls.map do |mindful|
  DailyMindful.create(content: mindful)
end
