require 'faker'
FactoryGirl.define do
  factory :survey do
    name { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
  end
end
