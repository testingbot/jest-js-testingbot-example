const webdriver = require("selenium-webdriver")

describe("TestingBot example test", () => {
  let driver

  beforeAll(() => {
    const tbKey = process.env.TESTINGBOT_KEY
    const tbSecret = process.env.TESTINGBOT_SECRET
    const capabilities = {
     'platformName' : 'WIN10',
     'browserName' : 'chrome',
     'browserVersion' : 'latest',
     'tb:options': {
       'name': 'Jest Sample Test'
      }
    }
    driver = new webdriver.Builder()
      .usingServer(`https://${tbKey}:${tbSecret}@hub.testingbot.com/wd/hub`)
      .withCapabilities(capabilities)
      .build()
  })

  afterAll(async () => {
    await driver.quit()
  })
  
  test("example test", async () => {
    await driver.get("https://testingbot.com")

    await driver.findElement(webdriver.By.css("body > div.bigHeader.home > nav > div > div.navigation-actions.is-desktop > a.button.button-trial")).click()

    expect(await driver.getCurrentUrl()).toBe(
      "https://testingbot.com/users/sign_up"
    )
  })
})
