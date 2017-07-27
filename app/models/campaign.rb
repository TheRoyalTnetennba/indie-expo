class Campaign < ApplicationRecord
  validates :title, :goal, :creator_id, :category_id, presence: true
  validates :archived, inclusion: { in: [true, false] }

  belongs_to :category

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :perks

  has_many :contributions

  def self.search(search)
    where('lower(title) LIKE ?', "%#{search.downcase}%")
  end

  def progress
    ((self.contributions.sum(:amount) / self.goal.to_f) * 100).round(2)
  end

  def days_left
    self.duration - (self.created_at.to_date - Time.current.to_date).to_i
  end

  def pretty_funds
    bucks = self.contributions.sum(:amount).to_i
    bucks.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
  end

  def pretty_goal
    bucks = self.contributions.sum(:amount).to_i
    bucks.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
  end
end

# self.duration -
