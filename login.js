try {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;
  const ADMIN_UID = "CJnhXotCpzbauGdfmlSufTKGGPw2";

  if(uid === ADMIN_UID){
    // auth state fully ready হওয়ার পরে redirect
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
} catch (e) {
  msg.innerText = "❌ " + e.message;
}
