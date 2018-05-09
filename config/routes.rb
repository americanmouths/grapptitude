Rails.application.routes.draw do

  scope '/api' do
    post 'user_token' => 'user_token#create'

    resources :users, only: [:create, :show]

    get '/daily_mindfuls' => 'daily_mindfuls#index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
