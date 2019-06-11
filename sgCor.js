const { openBrowser, goto, write, click,  near } = require('taiko');
(async () => {
  try {
    await openBrowser({ headless: false });
    await emulateDevice('iPhone 6');
    await goto("www.rentalcars.com/?cor=sg&forceMobile=true");
    await focus(inputField({ "placeholder": "e.g. town, city or airport" }));
    await write('Manche', into(inputField({ "placeholder": "e.g. town, city or airport" })), { delay: 20 });
    await press(["Delete", "Enter"]);
    await doubleClick("Manchester, United Kingdom");
      await click("Search", below("Free cancellations on most bookings"));

      await doubleClick("View deal");

      
  } catch (e) {
      console.error(e);
  } finally {
   //closeBrowser();
  }
})();
 