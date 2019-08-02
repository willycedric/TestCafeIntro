import LoginPage from '../Pages/loginPageModel'
import User from '../Data/User'
import App from '../Data/App'
import Message from '../Data/Message'

import Logbook from '../Pages/Logbook'

fixture`User should be able to login with valide credential`
    .page`${App.url}`

const loginPage = new LoginPage()
const logbook = new Logbook()

test('Patient should be allowed to login with valid credentials', async t => {
    await t     
        .typeText(loginPage.loginInput, User.login)
        .typeText(loginPage.passwordInput, User.password)
        .click(loginPage.submitButton)        
        .expect(logbook.bannerTopRight.innerText).eql(Message.userInfo)
})

test('Patient should not be allowed to login with invalid credentials', async t => {

    await t
        .typeText(loginPage.loginInput, User.invalidLogin)
        .typeText(loginPage.passwordInput, User.password)
        .click(loginPage.submitButton) 
        .expect(loginPage.loginErrorMessge.innerText).eql(Message.loginErrorMessge)
})