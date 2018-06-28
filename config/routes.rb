Rails.application.routes.draw do

resources :users

  scope '/api' do
    post '/login' => 'sessions#create'
    post '/signup' => 'users#create'
    resources :users, only: [:create] do
      get '/followers' => 'users#followers'
      get '/followees' => 'users#followees'
      post '/follow' => 'users#follow'
      resources :daily_greats
      get '/likes' => 'daily_greats#liked'
      post '/daily_greats/:id/like' => 'daily_greats#like'
    end

    get '/daily_mindfuls' => 'daily_mindfuls#index'
    get '/home' => 'home#all'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
