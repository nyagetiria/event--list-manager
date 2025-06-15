const guestForm = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestCategoryInput = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');
const guestCountDisplay = document.getElementById('guest-count');

let guestCount = 0;
const maxGuests = 50;

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = guestNameInput.value.trim();
  const category = guestCategoryInput.value;

  if (!name) return;

  if (guestCount >= maxGuests) {
    alert('Guest limit of 50 has been reached.');
    return;
  }

  addGuest(name, category);
  guestNameInput.value = '';
});

function addGuest(name, category) {
  const li = document.createElement('li');
  li.className = 'guest-item';

  const timeAdded = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  li.innerHTML = `
    <span>
      <strong>${name}</strong>
      <span class="tag ${category}">${category}</span>
      <em style="font-size: 0.75rem; color: #666;"> • ${timeAdded}</em>
    </span>
    <span>
      <button class="btn-toggle">Attending</button>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Remove</button>
    </span>
  `;

  guestList.appendChild(li);
  guestCount++;
  updateGuestCount();

  const deleteBtn = li.querySelector('.btn-delete');
  const toggleBtn = li.querySelector('.btn-toggle');
  const editBtn = li.querySelector('.btn-edit');

  deleteBtn.addEventListener('click', () => {
    li.remove();
    guestCount--;
    updateGuestCount();
  });

  toggleBtn.addEventListener('click', () => {
    toggleBtn.textContent =
      toggleBtn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
    toggleBtn.style.backgroundColor =
      toggleBtn.textContent === 'Attending' ? '#008000' : '#888';
  });

  editBtn.addEventListener('click', () => {
    const newName = prompt('Edit guest name:', name);
    if (newName && newName.trim() !== '') {
      li.querySelector('strong').textContent = newName.trim();
    }
  });
}

function updateGuestCount() {
  guestCountDisplay.textContent = `Guests: ${guestCount} / ${maxGuests}`;
}