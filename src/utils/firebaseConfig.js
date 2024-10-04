import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_Qu_1NT1OzFW63ANF0gWo4AL_D1-aqms",
  authDomain: "next-firebase-c7779.firebaseapp.com",
  projectId: "next-firebase-c7779",
  storageBucket: "next-firebase-c7779.appspot.com",
  messagingSenderId: "115009814680",
  appId: "1:115009814680:web:0e50190ae4cd38f65e10ed",
  measurementId: "G-804FVZHJC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
