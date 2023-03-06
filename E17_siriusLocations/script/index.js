$(document).ready(function() {
    $(".solutions-card").accordion();
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

        const unSelect = () => {
            $('.tab-detail-container').contents().css('display', 'none');
            $('.tab-container').children().css('background-color', '#000');
        }

        $('#about').click(()=> {
            unSelect();
            $('.about').css('display', 'flex');
            $('#about').css('background-color', '#001B71');
        });
        $('#solutions').click(()=> {
            unSelect();
            $('.solutions').css('display', 'contents');
            $('#solutions').css('background-color', '#001B71');
        })
        $('#locations').click(()=> {
            unSelect();
            $('.locations').css('display', 'flex');
            $('#locations').css('background-color', '#001B71');
        });
    });
});