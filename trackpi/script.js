const posts = [
  {name:"Alfin Francy", time:"2h ago", text:"Built a Spam SMS Detection System using NLP with 95% accuracy! #DataScience", img:"https://picsum.photos/500/300?1"},
  {name:"Trackpi Pvt Ltd", time:"5h ago", text:"We are hiring Google Apps Script Interns in Kakkanad, Kochi!", img:"https://picsum.photos/500/300?2"},
  {name:"Elon Musk", time:"1d ago", text:"Just working on new AI features.", img:"https://picsum.photos/500/300?3"},
  {name:"Future Optima", time:"3h ago", text:"Our students completed AI projects with Flask deployment.", img:"https://picsum.photos/500/300?4"},
  {name:"Don Bosco College", time:"6h ago", text:"Congratulations to BSc CS 2022-25 batch!", img:"https://picsum.photos/500/300?5"}
];

const feed = document.getElementById('feed');
posts.forEach(p=>{
  feed.innerHTML += `
  <div class="card">
    <div class="post-header"><img src="https://i.pravatar.cc/40" class="avatar"><div><b>${p.name}</b><br><small>${p.time}</small></div></div>
    <p>${p.text}</p>
    <img src="${p.img}" class="post-img">
    <div class="actions"><span>👍 Like</span><span>💬 Comment</span><span>↗️ Share</span></div>
  </div>`;
});

// Dark mode with persistence
const btn = document.getElementById('themeToggle');
const isDark = localStorage.getItem('theme')==='dark';
if(isDark) { document.documentElement.classList.add('dark'); btn.textContent='☀️ Light Mode'; }
btn.onclick = ()=>{
  document.documentElement.classList.toggle('dark');
  const darkNow = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', darkNow?'dark':'light');
  btn.textContent = darkNow ? '☀️ Light Mode' : '🌙 Dark Mode';
};