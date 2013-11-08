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
  @list_item = "<li><a href='/surveys/#{params[@survey.id]}'>#{@survey.title}</a></li>"
  if @survey.save
    redirect '/'
  else
    erb :new_survey
  end
end

# We need to now figure out how to send the @list_item data back to the AJAX request