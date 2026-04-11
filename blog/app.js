let posts = [];
        let currentEditIndex = null;
        let currentReadIndex = null;

        function showView(view) {
            document.getElementById('homeView').style.display = 'none';
            document.getElementById('createView').style.display = 'none';
            document.getElementById('editView').style.display = 'none';
            document.getElementById('readView').style.display = 'none';

            document.getElementById(view + 'View').style.display = 'block';

            if (view === 'home') renderPosts();
        }

        function addPost() {
            let title = document.getElementById('createTitle').value;
            let content = document.getElementById('createContent').value;

            if (!title || !content) return;

            posts.unshift({ title, content });

            document.getElementById('createTitle').value = '';
            document.getElementById('createContent').value = '';

            showView('home');
        }

        function renderPosts() {
            let container = document.getElementById('postsList');
            container.innerHTML = '';

            posts.forEach((post, index) => {
                let col = document.createElement('div');
                col.className = 'col-md-4';

                col.innerHTML = `
      <div class="card post-card p-3 h-100">
        <h5 class="fw-bold">${post.title}</h5>
        <p class="text-muted">${post.content.substring(0, 90)}...</p>
        <div class="d-flex gap-2 mt-auto">
          <button class="btn btn-sm btn-primary btn-rounded" onclick="openPost(${index})">Read</button>
          <button class="btn btn-sm btn-warning btn-rounded" onclick="editPost(${index})">Edit</button>
          <button class="btn btn-sm btn-danger btn-rounded" onclick="deletePost(${index})">Delete</button>
        </div>
      </div>
    `;

                container.appendChild(col);
            });
        }

        function openPost(index) {
            currentReadIndex = index;
            document.getElementById('readTitle').innerText = posts[index].title;
            document.getElementById('readContent').innerText = posts[index].content;
            showView('read');
        }

        function editPost(index) {
            currentEditIndex = index;
            document.getElementById('editTitle').value = posts[index].title;
            document.getElementById('editContent').value = posts[index].content;
            showView('edit');
        }

        function saveEdit() {
            posts[currentEditIndex].title = document.getElementById('editTitle').value;
            posts[currentEditIndex].content = document.getElementById('editContent').value;
            showView('home');
        }

        function deletePost(index) {
            posts.splice(index, 1);
            renderPosts();
        }

        showView('home');