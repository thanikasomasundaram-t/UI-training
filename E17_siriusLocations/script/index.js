$(document).ready(function() {
    $(".solutions").accordion();
    $.getJSON('./data/locations.json', (locations) => {

        locations.forEach((location, index) => {

            const row = document.createElement('div');
            $(row).addClass('card-row');
    
            const wrapper = document.createElement('div');
            $(wrapper).addClass('wrapper');
    
            const flag = document.createElement('div');
            $(flag).addClass('flag');
    
            const state = document.createElement('div');
            $(state)
                .addClass('state')
                .html(location.state);
    
            $(wrapper)
                .append(flag)
                .append(state);

            const wrapper1 = document.createElement('div');
            $(wrapper1).addClass('wrapper1');
    
            const city  = document.createElement('div');
            $(city)
                .addClass('city')
                .html(location.city);
    
            
            const contact  = document.createElement('div');
            $(contact)
                .addClass('contact')
                .html(location.contact);

            $(wrapper1)
            .append(city)
            .append(contact);

            $(row)
                .append(wrapper)
                .append(wrapper1);

            $(row).css('background-color', index%2 === 0?'#EEE': '#F2D9F7')
    
            $('.locations').append(row);
        });

        $('.tab-card').click(function () {
            $('.tab-card').each(function () {
                $(this).removeClass('active');
                $('.' + $(this).attr('id')).css('display', 'none');
            });
            $(this).addClass('active');

            $('.' + $(this).attr('id')).css('display', $(this).attr('id') === 'solutions'? 'contents': 'flex');

        });
    });
});