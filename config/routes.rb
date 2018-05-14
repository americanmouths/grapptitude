Rails.application.routes.draw do

  resources :users
  scope '/api' do
    post '/user_token' => 'user_token#create'
    post '/signup' => 'users#create'

    resources :users, only: [:create, :show]
    resources :daily_greats

    get '/daily_mindfuls' => 'daily_mindfuls#index'
    get '/home' => 'home#all'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
