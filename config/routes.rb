Rails.application.routes.draw do
  get 'manage/index'
  get 'home/index'
  devise_for :users

  namespace :v1, defaults: {format: 'json'} do
    get 'things', to: 'things#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
