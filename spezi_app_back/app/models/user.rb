class User < ApplicationRecord
  rolify
  after_create :assign_default_role
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise  :database_authenticatable,
          :registerable,
          :jwt_authenticatable,
          jwt_revocation_strategy: JwtDenylist

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true


  def assign_default_role
    self.add_role(:client) if self.roles.blank?
  end
end
