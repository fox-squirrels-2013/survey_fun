require 'spec_helper'
describe "Survey", :js => true do
  context "show page" do
    let!(:survey) { create :survey }
    it "displays the survey title and description" do
      visit "/surveys/survey-#{survey.id}"
      expect(page).to have_content(survey.name)
      expect(page).to have_content(survey.description)
    end
  end
end
