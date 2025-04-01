document.addEventListener('DOMContentLoaded', function() {
    let active = null;
    
    document.querySelectorAll('.screenshot-upload').forEach(div => {
      if (!div.innerHTML.trim()) {
        div.innerHTML = '<div class="no-print">Click than paste (CTRL + V)</div><img src="">';
      }
      
      div.addEventListener('click', function() {
        if (active === this) {
            active.classList.remove('active');
            active = null;
        } else {
            if (active) active.classList.remove('active');
            active = this;
            active.classList.add('active');
          }
        });
    });
    
    document.addEventListener('paste', function(e) {
      if (!active) return;
      
      for (let item of e.clipboardData.items) {
        if (item.type.includes('image')) {
          const url = URL.createObjectURL(item.getAsFile());
          const img = active.querySelector('img');
          img.src = url;
          img.style.display = 'block';
          active.querySelector('.no-print').style.display = 'none';
          active.classList.remove('active');
          active = null;
          break;
        }
      }
    });
  });

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});