var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect

describe('making a post', function() {
    it('logs in and creates a new post', function (){
        // go to home page
        browser.get('http://localhost:3001')
        
        // click 'login'        
        element(by.css('nav .login')).click()
        
        // filll out and submit login form
        element(by.model('username')).sendKeys('dickeyxxx')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()
        
        // submit a new post on the posts page
        element(by.css('nav .posts')).click()
        var post = 'my new post'+Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()
        
        expect(element.all(by.css('ul.list-group li')).first().getText()).to.eventually.contain(post)
        // the user should now see their post as the first post on the page
    })
    //  afterEach (function() {
    //  db.connection.db.dropDatabase()
    //  })
})