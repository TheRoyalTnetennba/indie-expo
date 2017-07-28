class User < ApplicationRecord
  attr_reader :password
  validates :session_token, :password_digest, :email, :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :contributions

  has_many :campaigns,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Campaign

  has_many :campaigns_contributed_to,
    source: :campaign,
    through: :contributions


  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(pass)
    BCrypt::Password.new(self.password_digest).is_password?(pass)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password?(password) ? @user : nil
  end

  def num_contributions
    contributions.count
  end

end
