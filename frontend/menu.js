// Menu Data
const menuData = {
    veg: {
        monday: {
            lunch: [
                { name: "Dal Tadka", description: "Aromatic yellow dal with spices" },
                { name: "Jeera Rice", description: "Basmati rice tempered with cumin" },
                { name: "Aloo Gobi", description: "Potato and cauliflower curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Paneer Butter Masala", description: "Creamy tomato-based curry" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Vegetable Biryani", description: "Fragrant rice with mixed vegetables" },
                { name: "Raita", description: "Yogurt with cucumber and spices" },
                { name: "Pickle", description: "Spicy mixed pickle" }
            ]
        },
        tuesday: {
            lunch: [
                { name: "Rajma Masala", description: "Kidney beans in rich gravy" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Bhindi Masala", description: "Okra cooked with spices" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Onion Salad", description: "Fresh onion rings" }
            ],
            dinner: [
                { name: "Chole", description: "Chickpeas in spicy gravy" },
                { name: "Bhature", description: "Deep-fried fluffy bread" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Boondi Raita", description: "Yogurt with fried gram flour balls" },
                { name: "Green Chutney", description: "Mint and coriander chutney" }
            ]
        },
        wednesday: {
            lunch: [
                { name: "Sambar", description: "South Indian lentil stew" },
                { name: "Rice", description: "Steamed rice" },
                { name: "Vegetable Curry", description: "Mixed vegetables in curry" },
                { name: "Dosa", description: "Crispy fermented crepe" },
                { name: "Coconut Chutney", description: "Fresh coconut dip" }
            ],
            dinner: [
                { name: "Malai Kofta", description: "Creamy vegetable dumplings" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Pulao", description: "Spiced rice with vegetables" },
                { name: "Papad", description: "Crispy lentil wafers" },
                { name: "Sweet", description: "Gulab Jamun" }
            ]
        },
        thursday: {
            lunch: [
                { name: "Chana Masala", description: "Chickpeas in tangy gravy" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Baingan Bharta", description: "Smoked eggplant curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Kadai Paneer", description: "Paneer with bell peppers" },
                { name: "Butter Naan", description: "Buttery leavened bread" },
                { name: "Vegetable Pulao", description: "Spiced rice with vegetables" },
                { name: "Raita", description: "Yogurt with vegetables" },
                { name: "Pickle", description: "Spicy mixed pickle" }
            ]
        },
        friday: {
            lunch: [
                { name: "Dal Makhani", description: "Creamy black lentils" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Mix Veg", description: "Mixed vegetables curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Shahi Paneer", description: "Royal creamy paneer curry" },
                { name: "Garlic Naan", description: "Garlic-flavored bread" },
                { name: "Biryani", description: "Fragrant rice with vegetables" },
                { name: "Boondi Raita", description: "Yogurt with fried gram flour" },
                { name: "Papad", description: "Crispy lentil wafers" }
            ]
        },
        saturday: {
            lunch: [
                { name: "Dal Fry", description: "Tempered yellow dal" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Aloo Matar", description: "Potato and peas curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Onion Salad", description: "Fresh onion rings" }
            ],
            dinner: [
                { name: "Paneer Tikka Masala", description: "Grilled paneer in creamy sauce" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Fried Rice", description: "Chinese-style vegetable rice" },
                { name: "Manchurian", description: "Vegetable balls in tangy sauce" },
                { name: "Raita", description: "Yogurt with spices" }
            ]
        },
        sunday: {
            lunch: [
                { name: "Dal Chawal", description: "Lentil curry with rice" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Gobi Masala", description: "Cauliflower curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Navratan Korma", description: "Nine-gem vegetable curry" },
                { name: "Butter Naan", description: "Buttery leavened bread" },
                { name: "Vegetable Biryani", description: "Fragrant rice with vegetables" },
                { name: "Raita", description: "Yogurt with vegetables" },
                { name: "Sweet", description: "Kheer (Rice pudding)" }
            ]
        }
    },
    nonVeg: {
        monday: {
            lunch: [
                { name: "Chicken Curry", description: "Spicy chicken in rich gravy" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Egg Curry", description: "Boiled eggs in spicy gravy" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Butter Chicken", description: "Creamy tomato-based curry" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Chicken Biryani", description: "Fragrant rice with chicken" },
                { name: "Raita", description: "Yogurt with cucumber and spices" },
                { name: "Pickle", description: "Spicy mixed pickle" }
            ]
        },
        tuesday: {
            lunch: [
                { name: "Mutton Curry", description: "Tender mutton in spicy gravy" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Chicken Fry", description: "Crispy fried chicken pieces" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Onion Salad", description: "Fresh onion rings" }
            ],
            dinner: [
                { name: "Chicken Tikka Masala", description: "Grilled chicken in creamy sauce" },
                { name: "Bhature", description: "Deep-fried fluffy bread" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Boondi Raita", description: "Yogurt with fried gram flour balls" },
                { name: "Green Chutney", description: "Mint and coriander chutney" }
            ]
        },
        wednesday: {
            lunch: [
                { name: "Fish Curry", description: "Fish in tangy coconut gravy" },
                { name: "Rice", description: "Steamed rice" },
                { name: "Egg Bhurji", description: "Scrambled eggs with spices" },
                { name: "Dosa", description: "Crispy fermented crepe" },
                { name: "Coconut Chutney", description: "Fresh coconut dip" }
            ],
            dinner: [
                { name: "Chicken Korma", description: "Mild creamy chicken curry" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Mutton Biryani", description: "Fragrant rice with mutton" },
                { name: "Papad", description: "Crispy lentil wafers" },
                { name: "Sweet", description: "Gulab Jamun" }
            ]
        },
        thursday: {
            lunch: [
                { name: "Chicken Do Pyaza", description: "Chicken with double onions" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Egg Curry", description: "Boiled eggs in spicy gravy" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Kadai Chicken", description: "Chicken with bell peppers" },
                { name: "Butter Naan", description: "Buttery leavened bread" },
                { name: "Chicken Pulao", description: "Spiced rice with chicken" },
                { name: "Raita", description: "Yogurt with vegetables" },
                { name: "Pickle", description: "Spicy mixed pickle" }
            ]
        },
        friday: {
            lunch: [
                { name: "Mutton Keema", description: "Minced mutton curry" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Chicken Masala", description: "Spicy chicken curry" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Chicken Shahi Korma", description: "Royal creamy chicken curry" },
                { name: "Garlic Naan", description: "Garlic-flavored bread" },
                { name: "Chicken Biryani", description: "Fragrant rice with chicken" },
                { name: "Boondi Raita", description: "Yogurt with fried gram flour" },
                { name: "Papad", description: "Crispy lentil wafers" }
            ]
        },
        saturday: {
            lunch: [
                { name: "Chicken Curry", description: "Spicy chicken in rich gravy" },
                { name: "Jeera Rice", description: "Cumin-flavored rice" },
                { name: "Egg Fry", description: "Fried eggs with spices" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Onion Salad", description: "Fresh onion rings" }
            ],
            dinner: [
                { name: "Chicken Tikka", description: "Grilled marinated chicken" },
                { name: "Naan", description: "Soft leavened bread" },
                { name: "Chicken Fried Rice", description: "Chinese-style chicken rice" },
                { name: "Chicken Manchurian", description: "Chicken balls in tangy sauce" },
                { name: "Raita", description: "Yogurt with spices" }
            ]
        },
        sunday: {
            lunch: [
                { name: "Mutton Curry", description: "Tender mutton in spicy gravy" },
                { name: "Steamed Rice", description: "Plain basmati rice" },
                { name: "Chicken Fry", description: "Crispy fried chicken" },
                { name: "Roti", description: "Fresh whole wheat bread" },
                { name: "Salad", description: "Fresh mixed vegetables" }
            ],
            dinner: [
                { name: "Butter Chicken", description: "Creamy tomato-based curry" },
                { name: "Butter Naan", description: "Buttery leavened bread" },
                { name: "Mutton Biryani", description: "Fragrant rice with mutton" },
                { name: "Raita", description: "Yogurt with vegetables" },
                { name: "Sweet", description: "Kheer (Rice pudding)" }
            ]
        }
    }
};

// Current state
let currentDay = 'monday';
let isVeg = true;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set up toggle switch
    const toggle = document.getElementById('vegToggle');
    toggle.addEventListener('change', function() {
        isVeg = !this.checked; // checked = non-veg (right), unchecked = veg (left)
        updateMenu();
    });

    // Set up day buttons
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            dayButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            currentDay = this.getAttribute('data-day');
            updateMenu();
        });
    });

    // Initial menu load
    updateMenu();
});

// Update menu display
function updateMenu() {
    const menuType = isVeg ? 'veg' : 'nonVeg';
    const dayMenu = menuData[menuType][currentDay];

    // Update lunch items
    const lunchContainer = document.getElementById('lunchItems');
    lunchContainer.innerHTML = '';
    dayMenu.lunch.forEach(item => {
        const menuItem = createMenuItem(item, isVeg);
        lunchContainer.appendChild(menuItem);
    });

    // Update dinner items
    const dinnerContainer = document.getElementById('dinnerItems');
    dinnerContainer.innerHTML = '';
    dayMenu.dinner.forEach(item => {
        const menuItem = createMenuItem(item, isVeg);
        dinnerContainer.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(item, isVeg) {
    const menuItem = document.createElement('div');
    menuItem.className = `menu-item ${isVeg ? '' : 'non-veg'}`;
    
    const icon = document.createElement('div');
    icon.className = 'menu-item-icon';
    icon.innerHTML = isVeg ? '<i class="fas fa-leaf"></i>' : '<i class="fas fa-drumstick-bite"></i>';
    
    const content = document.createElement('div');
    content.className = 'menu-item-content';
    
    const name = document.createElement('div');
    name.className = 'menu-item-name';
    name.textContent = item.name;
    
    const description = document.createElement('div');
    description.className = 'menu-item-description';
    description.textContent = item.description;
    
    content.appendChild(name);
    content.appendChild(description);
    
    menuItem.appendChild(icon);
    menuItem.appendChild(content);
    
    return menuItem;
}

