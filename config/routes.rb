Rails.application.routes.draw do

  resources :daily_mindfuls
  resources :daily_greats
  scope '/api' do
    post 'user_token' => 'user_token#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
