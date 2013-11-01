require 'spec_helper'
describe "Homepage", :js => true do
  context "surveys" do
    let!(:survey) { create :survey }
    before(:each) do
      visit '/'
    end
    it "displays a list of all surveys" do
      expect(page).to have_content survey.name
    end

    it "user can go to a survey from the Homepage" do
      click_on survey.name
      expect(page).to have_content(survey.name)
      expect(page).to have_content(survey.description)
    end
  end
end
