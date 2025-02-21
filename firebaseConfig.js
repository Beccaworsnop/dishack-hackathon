const admin = require("firebase-admin");

const serviceAccount = require("./firebase-service-account.json"); // You'll get this file in Step 3

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;