document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('inquiryType');
    const inputContainer = document.getElementById('inputContainer');

    // Hide all input fields initially
    const inputFields = inputContainer.children;
    for (let field of inputFields) {
        field.classList.add('hidden');
    }

    selectElement.addEventListener('change', (event) => {
        // Hide all input fields when an option is selected
        for (let field of inputFields) {
            field.classList.add('hidden');
        }

        // Show the relevant input field based on the selected option
        const selectedValue = event.target.value;
        if (selectedValue === 'adoption') {
            document.getElementById('adoption').classList.remove('hidden');
        } else if (selectedValue === 'volunteering') {
            document.getElementById('volunteering').classList.remove('hidden');
        } else if (selectedValue === 'donation') {
            document.getElementById('donation').classList.remove('hidden');
        } else if (selectedValue === 'general') {
            document.getElementById('general').classList.remove('hidden');
        }
    });
});
