get '/' do
  @surveys = Survey.all
  erb :index
end

get '/surveys/new' do
  # if request.xhr?
  # else
  erb :new_survey, :layout => false;

end

get '/surveys/:id' do
  @survey = Survey.find params[:id]
  erb :show_survey
end

post '/surveys/create' do
  @survey = Survey.new params[:survey]
  if @survey.save
    redirect '/'
  else
    erb :new_survey
  end
end
