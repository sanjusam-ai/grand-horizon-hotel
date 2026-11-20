// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Booking Modal Controls
function openBookingModal(roomName = '') {
  const modal = document.getElementById('booking-modal');
  const select = document.getElementById('modal-room-select');
  if (roomName && select) {
    for (let option of select.options) {
      if (option.text.includes(roomName)) {
        option.selected = true;
        break;
      }
    }
  }
  if (modal) modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
}

function submitBooking(event) {
  event.preventDefault();
  closeBookingModal();
  alert('Reservation confirmed! Thank you for choosing Grand Horizon Hotel.');
}

function handleQuickInquiry(event) {
  event.preventDefault();
  event.target.reset();
  alert('Thank you! Your message has been sent to our front desk.');
}

// Rooms Page Filter Logic
function filterRooms() {
  const selectedType = document.querySelector('input[name="room-type"]:checked')?.value || 'all';
  const maxPrice = parseInt(document.getElementById('price-range')?.value || 500, 10);
  const priceLabel = document.getElementById('price-value');
  if (priceLabel) priceLabel.textContent = `$${maxPrice}`;

  const cards = document.querySelectorAll('.room-card');
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardType = card.getAttribute('data-type');
    const cardPrice = parseInt(card.getAttribute('data-price'), 10);
    const matchesType = selectedType === 'all' || cardType === selectedType;
    const matchesPrice = cardPrice <= maxPrice;

    if (matchesType && matchesPrice) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  const noRoomsMsg = document.getElementById('no-rooms-msg');
  if (noRoomsMsg) {
    noRoomsMsg.classList.toggle('hidden', visibleCount > 0);
  }
}

function resetFilters() {
  const allRadio = document.querySelector('input[name="room-type"][value="all"]');
  const range = document.getElementById('price-range');
  if (allRadio) allRadio.checked = true;
  if (range) range.value = 500;
  filterRooms();
}

// Dining Table Modal Controls
function openTableModal() {
  const modal = document.getElementById('table-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeTableModal() {
  const modal = document.getElementById('table-modal');
  if (modal) modal.classList.add('hidden');
}

function submitTableReservation(event) {
  event.preventDefault();
  closeTableModal();
  alert('Table reserved at The Restaurant! We look forward to hosting you.');
}