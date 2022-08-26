import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL, //databaseURL 직접 만들어 줘야 됨(노션에 기록)
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,  //*.env에 있는 걸로 값을 대체
};

// Initialize Firebase
const firabaseApp = initializeApp(firebaseConfig);


export default firabaseApp; //firabaseApp을 export 해주기!

//쓰지 않는 코드는 삭제했음
