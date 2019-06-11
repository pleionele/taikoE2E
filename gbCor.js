const { openBrowser, goto, write, click,  near } = require('taiko');
(async () => {
  try {
    await openBrowser({ headless: false });
      await emulateDevice('iPhone 6');
      await goto("www.rentalcars.com/?cor=gb&forceMobile=true");
      await write('Manch', into(await inputField({"placeholder":"city, airport, station, region, district…"})));

      await click("Manchester, United Kingdom");
      await click("Search");

      await click("View Deal");

      
  } catch (e) {
      console.error(e);
  } finally {
   //closeBrowser();
  }
})();
 