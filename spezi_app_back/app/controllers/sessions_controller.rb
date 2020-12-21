class SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.id
      secret = ENV['DEVISE_JWT_SECRET_KEY']
      time = Time.at(JWT.decode(current_token, secret)[0]['exp'])

      render json: { data: current_user, 
                     token: current_token,
                     exp: time.strftime("%Y-%m-%dT%H:%M:%S") }.to_json, status: :ok
    else
      render json: { errors: "Authentication error"}, status: '401'
    end   
  end

  def current_token
    request.env['warden-jwt_auth.token']
  end

  def respond_to_on_destroy
    head :no_content
  end
end
