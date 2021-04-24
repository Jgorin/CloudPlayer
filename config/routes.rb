Rails.application.routes.draw do

  root 'homes#home'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:show]

  resources :homes do
    collection do
      get "home"
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show] do
        collection do
          patch "send_friend_request"
          get 'search'
        end
      end
    end
  end
end