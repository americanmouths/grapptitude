Rails.application.routes.draw do

resources :users

  scope '/api' do
    post '/login' => 'sessions#create'
    post '/signup' => 'users#create'
    resources :users, only: [:create] do
      get '/likes' => 'daily_greats#liked'
      resources :daily_greats
      post '/daily_greats/:id/like' => 'daily_greats#like'
    end

    get '/daily_mindfuls' => 'daily_mindfuls#index'
    get '/home' => 'home#all'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
