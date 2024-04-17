const postsContainer = document.getElementById('posts');
let posts = [];

function submitPost() {
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const title = titleInput.value;
  const content = contentInput.value;

  if (!title || !content) {
    alert('Mohon isi judul dan isi artikel.');
    return;
  }

  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const post = {
    title,
    content,
    date: formattedDate
  };

  posts.push(post);
  renderPosts();

  titleInput.value = '';
  contentInput.value = '';
}

function renderPosts() {
  postsContainer.innerHTML = '';

  posts.forEach((post, index) => {
    const postItem = document.createElement('li');
    postItem.classList.add('post-item');
    postItem.innerHTML = `
      <h3>${post.title}</h3>
      <p><em>${post.date}</em></p>
      <p>${post.content}</p>
      <button onclick="editPost(${index})">Edit</button>
      <button onclick="confirmDelete(${index})">Hapus</button>
    `;
    postsContainer.appendChild(postItem);
  });
}

function confirmDelete(index) {
  const isDelete = confirm("Apakah Anda yakin ingin menghapus artikel ini?");
  if (isDelete) {
    deletePost(index);
  }
}

function deletePost(index) {
  posts.splice(index, 1);
  renderPosts();
}

function editPost(index) {
  const post = posts[index];
  const newTitle = prompt('Masukkan judul baru:', post.title);
  const newContent = prompt('Masukkan isi baru:', post.content);

  if (newTitle && newContent) {
    post.title = newTitle;
    post.content = newContent;
    renderPosts();
  }
}
