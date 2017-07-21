class Campaign < ApplicationRecord
  validates :title, :goal, :creator_id, :category_id, :archived

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

end
