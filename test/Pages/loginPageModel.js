import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.loginInput = Selector('#cphMain_cphMain_wpLogin_login_UserName');
        this.passwordInput = Selector('#cphMain_cphMain_wpLogin_login_Password');
        this.populateButton = Selector('#populate');
        this.submitButton = Selector('#cphMain_cphMain_wpLogin_login_btnLogin');

        this.loginErrorMessge = Selector('.loginValidator');
    }
}