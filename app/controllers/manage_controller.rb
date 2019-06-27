class ManageController < ApplicationController
  def index
    @users = User.where.not(role: 'super_admin' ).or(User.where(role: nil))
  end
end
