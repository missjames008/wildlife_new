class Sighting < ActiveRecord::Base
  belongs_to :animal
  validates :date, presence: true
  validates :lat, presence: true
  validates :long, presence: true
  validates :animal, presence: true
  validates :region, presence: true
end
