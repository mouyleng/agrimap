Rails.application.routes.draw do
  get 'manage/index'
  get 'home/index'
  devise_for :users

  root 'static#index'
end
