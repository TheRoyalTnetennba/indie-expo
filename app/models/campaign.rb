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
    find(:all, :conditions => ['title LIKE ?', "%#{search}%"])
  end

  def progress
    (self.contributions.sum(:amount) / self.goal.to_f) * 100
  end
end
