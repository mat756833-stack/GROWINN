onAuthStateChanged(auth, async (user) => {
  if(!user){
    window.location.href = "login.html";
    return;
  }

  if(user.uid !== ADMIN_UID){
    alert("আপনার অ্যাক্সেস নেই!");
    window.location.href = "dashboard.html";
    return;
  }

  // এখানে এখন নিশ্চিতভাবে Admin UID
  loadInvestments();
});
