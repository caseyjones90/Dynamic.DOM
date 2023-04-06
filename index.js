const linkInput = document.getElementById('linkInput');
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const bookmarkList = document.getElementById('bookmarkList');
const bookmarks = [];
  
addButton.addEventListener('click', function() {
    const link = linkInput.value;
    const name = nameInput.value;
    const bookmark = { link, name };
    bookmarks.push(bookmark);
    updateBookmarkList();
    linkInput.value = '';
    nameInput.value = '';
});
  
function updateBookmarkList() {
    bookmarkList.innerHTML = '';
    bookmarks.map(function(bookmark, index) {
        const li = document.createElement('li');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', function() {
            bookmarks.splice(index, 1);
            updateBookmarkList();
        });
        li.innerHTML = `<a href="${bookmark.link}">${bookmark.name}</a>`;
        li.appendChild(removeButton);
        bookmarkList.appendChild(li);
    });
}