// Load purchase data from sessionStorage
let purchaseData = null;

document.addEventListener('DOMContentLoaded', function() {
    // Get purchase data
    const storedData = sessionStorage.getItem('purchaseData');
    
    if (!storedData) {
        alert('No purchase data found. Redirecting to plans page.');
        window.location.href = 'plan.html';
        return;
    }

    purchaseData = JSON.parse(storedData);

    // Populate order summary
    document.getElementById('summary-plan').textContent = purchaseData.planName;
    document.getElementById('summary-meal-type').textContent = 
        purchaseData.mealType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian';
    document.getElementById('summary-meal-time').textContent = 
        purchaseData.mealTime.map(time => time.charAt(0).toUpperCase() + time.slice(1)).join(', ');
    document.getElementById('summary-duration').textContent = `${purchaseData.days} days`;
    document.getElementById('summary-start-date').textContent = formatDate(purchaseData.startDate);
    document.getElementById('summary-end-date').textContent = formatDate(purchaseData.endDate);
    document.getElementById('summary-name').textContent = purchaseData.name;
    document.getElementById('summary-phone').textContent = purchaseData.phone;
    document.getElementById('summary-address').textContent = purchaseData.address;

    // Set prices
    let basePrice = parseInt(purchaseData.price);
    let discount = 0;
    let totalPrice = basePrice;

    document.getElementById('base-price').textContent = `₹${basePrice}`;
    document.getElementById('total-price').textContent = `₹${totalPrice}`;

    // Coupon functionality
    const couponInput = document.getElementById('coupon-code');
    const applyBtn = document.getElementById('apply-coupon');
    const couponMessage = document.getElementById('coupon-message');
    const discountRow = document.getElementById('discount-row');
    const discountAmount = document.getElementById('discount-amount');
    const totalPriceElement = document.getElementById('total-price');

    // Sample coupon codes
    const coupons = {
        'WELCOME10': 10,
        'SAVE20': 20,
        'FIRST50': 50
    };

    let appliedCoupon = null;

    applyBtn.addEventListener('click', function() {
        const couponCode = couponInput.value.trim().toUpperCase();
        
        if (!couponCode) {
            couponMessage.textContent = 'Please enter a coupon code';
            couponMessage.className = 'coupon-message error';
            return;
        }

        if (appliedCoupon === couponCode) {
            couponMessage.textContent = 'Coupon already applied';
            couponMessage.className = 'coupon-message error';
            return;
        }

        if (coupons[couponCode]) {
            discount = Math.round((basePrice * coupons[couponCode]) / 100);
            totalPrice = basePrice - discount;
            appliedCoupon = couponCode;

            discountRow.style.display = 'flex';
            discountAmount.textContent = `-₹${discount}`;
            totalPriceElement.textContent = `₹${totalPrice}`;

            couponMessage.textContent = `Coupon "${couponCode}" applied! ${coupons[couponCode]}% discount`;
            couponMessage.className = 'coupon-message success';
            
            couponInput.disabled = true;
            applyBtn.disabled = true;
        } else {
            couponMessage.textContent = 'Invalid coupon code';
            couponMessage.className = 'coupon-message error';
        }
    });

    // Payment button
    const paymentBtn = document.getElementById('make-payment');
    paymentBtn.addEventListener('click', function() {
        // Add payment processing logic here
        // For now, just show a success message
        const paymentData = {
            ...purchaseData,
            coupon: appliedCoupon,
            discount: discount,
            finalPrice: totalPrice
        };

        // Store payment data
        sessionStorage.setItem('paymentData', JSON.stringify(paymentData));

        // Simulate payment processing
        paymentBtn.disabled = true;
        paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

        setTimeout(() => {
            alert('Payment successful! Your order has been confirmed.');
            // Clear session storage
            sessionStorage.removeItem('purchaseData');
            sessionStorage.removeItem('paymentData');
            // Redirect to home or success page
            window.location.href = 'index.html';
        }, 2000);
    });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

