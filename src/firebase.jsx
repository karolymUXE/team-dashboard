import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAnalytics, logEvent } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyC9g92w_6py3FTxNYXUN4puLfmZNnBgRNM",
  authDomain: "team-dashboard-db-dd23a.firebaseapp.com",
  databaseURL: "https://team-dashboard-db-dd23a-default-rtdb.firebaseio.com",
  projectId: "team-dashboard-db-dd23a",
  storageBucket: "team-dashboard-db-dd23a.appspot.com",
  messagingSenderId: "690521762243",
  appId: "1:690521762243:web:b2df5f118ca3f8206d3576",
  measurementId: "G-S7Q2JXRSYH"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')

export const db = getDatabase(app)