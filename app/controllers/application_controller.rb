class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def issue_token(payload)
    JWT.encode(payload, "supersecretcode")
  end

  def current_user
    if token = request.headers["Authorization"]
      decoded_token = JWT.decode(token, "supersecretcode", true, {algorithm: "HS256"})
      user_id = decoded_token[0]["user_id"]
      User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

end
