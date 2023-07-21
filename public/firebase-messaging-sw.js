importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAVgfSFMXoE2Jb7KDfmszuFy6YEab1BOlA",
  authDomain: "message-658fb.firebaseapp.com",
  projectId: "message-658fb",
  storageBucket: "message-658fb.appspot.com",
  messagingSenderId: "645580932810",
  appId: "1:645580932810:web:9ed95e24e2455ed0b59633"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
