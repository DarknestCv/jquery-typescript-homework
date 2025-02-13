$(document).ready(function() {
    const prices = {
        brokoli: 50,  
        korm: 100     
    };

    function updateFoodInfo() {
        const foodType = $('.food-type').val();  
        const quantity = $('.food-quantity').val();  
        const price = prices[foodType] * quantity;  

        let imgSrc = '';
        if (foodType === 'brokoli') {
            imgSrc = './OIP.jpg';  
        } else if (foodType === 'korm') {
            imgSrc = './OIP (1).jpg';  
        }
        $('#food-image').attr('src', imgSrc); 

        $('.price-co').text(price);  
    }

    $('.food-type').change(function() {
        updateFoodInfo();
    });

    $('.food-quantity').on('input', function() {
        $('.quantity-display').text($(this).val());
        updateFoodInfo();
    });

    $('.order-btn').click(function() {
        alert('Замовлення зроблено!');  
        $('.food')[0].reset();  
        $('#food-image').attr('src', 'placeholder.jpg');  
        $('.price-co').text('0');  
        $('.quantity-display').text('1');  
    });

    updateFoodInfo();
});
