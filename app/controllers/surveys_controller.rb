get '/' do
  @surveys = Survey.all
  erb :index
end

get '/surveys/new' do
  erb :new_survey
end

get '/surveys/:id' do
  @survey = Survey.find params[:id]
  erb :show_survey
end

post '/surveys/create' do
  @survey = Survey.create params[:survey]
  if request.xhr?
      content_type :json
      params.to_json
  else
    redirect '/'
  end
end
