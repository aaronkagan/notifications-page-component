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
  });
});
