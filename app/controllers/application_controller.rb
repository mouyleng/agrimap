class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # skip_before_filter :require_no_authentication
  before_action :authenticate_user!
end
