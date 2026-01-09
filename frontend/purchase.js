// Get plan details from URL
const urlParams = new URLSearchParams(window.location.search);
const planType = urlParams.get('plan') || '3days';
const planPrice = urlParams.get('price') || '299';

// Auto-resize address textarea
function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 200;
    textarea.style.height = Math.min(scrollHeight, maxHeight) + 'px';
    if (scrollHeight > maxHeight) {
        textarea.style.overflowY = 'auto';
    } else {
        textarea.style.overflowY = 'hidden';
    }
}

    // Update plan display
    document.addEventListener('DOMContentLoaded', function() {
        const planName = planType === '3days' ? '3-Days Plan' : 'Monthly Plan';
        document.getElementById('plan-name').textContent = planName;
        document.getElementById('plan-price').textContent = planPrice;
        document.getElementById('selected-plan').textContent = `Plan: ${planName} - ₹${planPrice}`;

        // Auto-resize address textarea
        const addressTextarea = document.getElementById('address');
        addressTextarea.addEventListener('input', function() {
            autoResizeTextarea(this);
        });
        // Initial resize
        autoResizeTextarea(addressTextarea);

        // Phone number validation - restrict to 10 digits only
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function() {
            // Remove any non-digit characters
            this.value = this.value.replace(/\D/g, '');
            // Limit to 10 digits
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });

        phoneInput.addEventListener('keypress', function(e) {
            // Only allow numbers
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').setAttribute('min', today);
    document.getElementById('end-date').setAttribute('min', today);

    // Get date inputs
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    // For 3-days plan, restrict end date to exactly 3 days from start
    if (planType === '3days') {
        // Add info message
        const dateSection = document.querySelector('.date-group').parentElement;
        const infoMessage = document.createElement('div');
        infoMessage.className = 'date-info-message';
        infoMessage.innerHTML = '<i class="fas fa-info-circle"></i> For 3-Days Plan, end date is automatically set to exactly 3 days from start date';
        dateSection.appendChild(infoMessage);

        // Disable end date input for 3-days plan - make it completely non-editable
        endDateInput.disabled = true;
        endDateInput.readOnly = true;
        endDateInput.style.backgroundColor = '#f5f5f5';
        endDateInput.style.cursor = 'not-allowed';
        endDateInput.title = 'End date is automatically calculated for 3-Days Plan';

        // Function to calculate and set end date for 3-days plan
        function setEndDateFor3Days() {
            const startDate = startDateInput.value;
            if (startDate) {
                const start = new Date(startDate);
                // Calculate end date (2 days after start = 3 days total)
                const endDate = new Date(start);
                endDate.setDate(endDate.getDate() + 2);
                const endDateString = endDate.toISOString().split('T')[0];
                
                endDateInput.value = endDateString; // Auto-set end date
                endDateInput.setAttribute('min', startDate);
                endDateInput.setAttribute('max', endDateString);
            }
        }

        // Update end date when start date changes
        startDateInput.addEventListener('change', setEndDateFor3Days);
        startDateInput.addEventListener('input', setEndDateFor3Days);

        // Initialize end date if start date is already selected
        if (startDateInput.value) {
            setEndDateFor3Days();
        }

        // Prevent any manual changes to end date
        endDateInput.addEventListener('focus', function() {
            this.blur(); // Remove focus immediately
        });
    } else {
        // For monthly plan, automatically set end date to 30 days after start
        // Add info message
        const dateSection = document.querySelector('.date-group').parentElement;
        const infoMessage = document.createElement('div');
        infoMessage.className = 'date-info-message';
        infoMessage.innerHTML = '<i class="fas fa-info-circle"></i> For Monthly Plan, end date is automatically set to 30 days from start date';
        dateSection.appendChild(infoMessage);

        // Function to calculate and set end date for monthly plan (30 days)
        function setEndDateForMonthly() {
            const startDate = startDateInput.value;
            if (startDate) {
                const start = new Date(startDate);
                // Calculate end date (29 days after start = 30 days total including start)
                const endDate = new Date(start);
                endDate.setDate(endDate.getDate() + 29);
                const endDateString = endDate.toISOString().split('T')[0];
                
                endDateInput.setAttribute('min', startDate);
                endDateInput.setAttribute('max', endDateString); // Set max to exactly 30 days
                endDateInput.value = endDateString; // Auto-set end date
                // Add visual indicator that it's auto-set
                endDateInput.style.backgroundColor = '#fff9e6';
                endDateInput.title = 'End date is automatically set to 30 days for Monthly Plan (maximum allowed)';
            }
        }

        // Update end date when start date changes
        startDateInput.addEventListener('change', setEndDateForMonthly);
        startDateInput.addEventListener('input', setEndDateForMonthly);

        // Validate and restrict end date changes for monthly plan
        endDateInput.addEventListener('change', function() {
            const startDate = startDateInput.value;
            if (startDate && this.value) {
                const start = new Date(startDate);
                const end = new Date(this.value);
                const maxEndDate = new Date(start);
                maxEndDate.setDate(maxEndDate.getDate() + 29); // 30 days total
                
                // Calculate days
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
                
                // If more than 30 days, restrict to 30 days
                if (days > 30) {
                    alert('Monthly Plan is limited to 30 days. End date has been set to 30 days from start date.');
                    this.value = maxEndDate.toISOString().split('T')[0];
                    return;
                }
                
                // If less than start date, correct it
                if (end < start) {
                    alert('End date must be after start date.');
                    this.value = maxEndDate.toISOString().split('T')[0];
                    return;
                }
                
                // Update max to ensure they can't select beyond 30 days
                this.setAttribute('max', maxEndDate.toISOString().split('T')[0]);
            }
        });

        // Initialize end date if start date is already selected
        if (startDateInput.value) {
            setEndDateForMonthly();
        }
    }

    // Validate meal time selection
    const mealTimeCheckboxes = document.querySelectorAll('input[name="mealTime"]');
    const form = document.getElementById('purchase-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if at least one meal time is selected
        const checkedMealTimes = Array.from(mealTimeCheckboxes).filter(cb => cb.checked);
        if (checkedMealTimes.length === 0) {
            alert('Please select at least one meal time (Lunch or Dinner)');
            return;
        }

        // Validate dates
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        if (!startDate || !endDate) {
            alert('Please select both start and end dates');
            return;
        }

        if (new Date(endDate) < new Date(startDate)) {
            alert('End date must be after start date');
            return;
        }

        // Validate phone number
        const phone = document.getElementById('phone').value;
        if (phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Calculate number of days
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        // Validate 3-days plan: must be exactly 3 days
        if (planType === '3days') {
            if (days !== 3) {
                // Auto-correct the end date
                const correctEndDate = new Date(start);
                correctEndDate.setDate(correctEndDate.getDate() + 2);
                document.getElementById('end-date').value = correctEndDate.toISOString().split('T')[0];
                // Recalculate days
                const correctedDays = Math.ceil((correctEndDate - start) / (1000 * 60 * 60 * 24)) + 1;
                if (correctedDays !== 3) {
                    alert('Error calculating dates. Please try again.');
                    return;
                }
                days = 3; // Update days variable
            }
        } else {
            // For monthly plan, must be exactly 30 days (not more, not less)
            if (days > 30) {
                alert('Monthly Plan is limited to exactly 30 days. End date has been adjusted.');
                const correctEndDate = new Date(start);
                correctEndDate.setDate(correctEndDate.getDate() + 29);
                document.getElementById('end-date').value = correctEndDate.toISOString().split('T')[0];
                days = 30; // Update days variable
            } else if (days < 30) {
                alert('Monthly Plan should be exactly 30 days. End date has been adjusted.');
                const correctEndDate = new Date(start);
                correctEndDate.setDate(correctEndDate.getDate() + 29);
                document.getElementById('end-date').value = correctEndDate.toISOString().split('T')[0];
                days = 30; // Update days variable
            }
        }

        // Collect form data
        const formData = {
            planType: planType,
            planName: planName,
            price: planPrice,
            mealType: document.querySelector('input[name="mealType"]:checked').value,
            mealTime: Array.from(mealTimeCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value),
            startDate: startDate,
            endDate: endDate,
            days: days,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };

        // Store in sessionStorage
        sessionStorage.setItem('purchaseData', JSON.stringify(formData));

        // Redirect to payment page
        window.location.href = 'payment.html';
    });

    // Map functionality
    let map;
    let marker;
    let geocoder;
    let autocomplete;
    let selectedLocation = null;

    // Map modal elements
    const mapModal = document.getElementById('map-modal');
    const selectFromMapBtn = document.getElementById('select-from-map');
    const closeMapModalBtn = document.getElementById('close-map-modal');
    const confirmLocationBtn = document.getElementById('confirm-location');
    const mapSearchInput = document.getElementById('map-search');

    // Check if Google Maps is loaded
    function checkGoogleMapsLoaded() {
        if (typeof google === 'undefined' || !google.maps) {
            alert('Google Maps is not loaded. Please check your API key in purchase.html');
            return false;
        }
        return true;
    }

    // Open map modal
    selectFromMapBtn.addEventListener('click', function() {
        if (!checkGoogleMapsLoaded()) {
            return;
        }
        mapModal.classList.add('active');
        if (!map) {
            initMap();
        }
    });

    // Close map modal
    closeMapModalBtn.addEventListener('click', function() {
        mapModal.classList.remove('active');
    });

    // Close modal when clicking outside
    mapModal.addEventListener('click', function(e) {
        if (e.target === mapModal) {
            mapModal.classList.remove('active');
        }
    });

    // Initialize map
    function initMap() {
        // Default location (can be user's current location or a default)
        const defaultLocation = { lat: 23.2599, lng: 77.4126 }; // Bhopal, India

        // Initialize map
        map = new google.maps.Map(document.getElementById('map'), {
            center: defaultLocation,
            zoom: 13,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true
        });

        geocoder = new google.maps.Geocoder();

        // Initialize autocomplete for search
        autocomplete = new google.maps.places.Autocomplete(mapSearchInput);
        autocomplete.bindTo('bounds', map);

        // When place is selected from autocomplete
        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }

            setMarker(place.geometry.location);
            selectedLocation = place.geometry.location;
            updateAddressFromLocation(place.geometry.location);
        });

        // Add click listener to map
        map.addListener('click', function(e) {
            setMarker(e.latLng);
            selectedLocation = e.latLng;
            updateAddressFromLocation(e.latLng);
        });

        // Try to get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(userLocation);
                    map.setZoom(15);
                    setMarker(userLocation);
                    selectedLocation = userLocation;
                    updateAddressFromLocation(userLocation);
                },
                function() {
                    // Use default location if geolocation fails
                    setMarker(defaultLocation);
                    selectedLocation = defaultLocation;
                }
            );
        } else {
            setMarker(defaultLocation);
            selectedLocation = defaultLocation;
        }
    }

    // Set marker on map
    function setMarker(location) {
        if (marker) {
            marker.setPosition(location);
        } else {
            marker = new google.maps.Marker({
                position: location,
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP
            });

            // Update location when marker is dragged
            marker.addListener('dragend', function() {
                selectedLocation = marker.getPosition();
                updateAddressFromLocation(selectedLocation);
            });
        }
    }

    // Update address from location
    function updateAddressFromLocation(location) {
        geocoder.geocode({ location: location }, function(results, status) {
            if (status === 'OK' && results[0]) {
                const address = results[0].formatted_address;
                // Don't auto-fill, just show in search box for user to confirm
                mapSearchInput.value = address;
            }
        });
    }

    // Confirm location button
    confirmLocationBtn.addEventListener('click', function() {
        if (selectedLocation) {
            geocoder.geocode({ location: selectedLocation }, function(results, status) {
                if (status === 'OK' && results[0]) {
                    const addressField = document.getElementById('address');
                    addressField.value = results[0].formatted_address;
                    // Trigger auto-resize
                    autoResizeTextarea(addressField);
                    mapModal.classList.remove('active');
                } else {
                    alert('Could not get address for selected location. Please try again.');
                }
            });
        } else {
            alert('Please select a location on the map first.');
        }
    });

    // Enter key on search input
    mapSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmLocationBtn.click();
        }
    });
});

