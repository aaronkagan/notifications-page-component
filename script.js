const markAsReadBtn = document.querySelector('.btn-header');
const notificationCount = document.querySelector('.notification-count');
const unreadIcons = document.querySelectorAll('.unread-icon');
const unreadPosts = document.querySelectorAll('.unread-post');

markAsReadBtn.addEventListener('click', () => {
  notificationCount.innerText = 0;
  unreadIcons.forEach((icon) => {
    icon.classList.remove('unread-icon');
  });
  unreadPosts.forEach((post) => {
    post.classList.remove('unread-post');
    post.removeEventListener('click', markReadHandler);
  });
});

function markRead(post) {
  post.classList.remove('unread-post');
  notificationCount.innerText = parseInt(notificationCount.innerText) - 1;
  console.log(
    post.querySelector('.unread-icon').classList.remove('unread-icon')
  );
  post.removeEventListener('click', markReadHandler);
}

function markReadHandler() {
  markRead(this); // Call the markRead function with the clicked element
}

unreadPosts.forEach((post) => {
  post.addEventListener('click', markReadHandler);
});
