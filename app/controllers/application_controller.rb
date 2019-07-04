class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  # before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end

  # config.middleware.insert_before 0, Rack::Cors  do
  #   origins '*'
  #   resource '*',
  #     headers: :any,
  #     methods: %i(get post put patch delete options head)
  # end
end
