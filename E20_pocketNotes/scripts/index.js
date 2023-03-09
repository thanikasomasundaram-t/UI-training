const colors = ['#EBCCED', '#FCFCFC', '#FFCA71', '#E5EE91', '#FFA78C'];
const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

const tick = document.createElement('div');
tick.className = 'tick';


const deleteSectionDetails = {
    deleteAll: {
        h4: 'DELETE ALL NOTES',
        h3: 'Are you sure want to delete all notes?',
        button: 'YES, DELETE',
    },
    deleteOne: {
        h4: 'DELETE NOTE',
        h3: 'Are you sure want to delete this note?',
        button: 'YES, DELETE',
    },
    confirm: {
        h4: 'CONFIRM',
        h3: 'Seems like you are in the middle of adding/editing content.Do you want to leave?',
        button: 'YES, CLOSE',
    }
}

const deleteElement = {
    deleteOne: () => {
        $('.delete-dialog').attr('id', 'deleteAll');
        $('.delete-button').html('DELETE ALL').attr('id', 'deleteAll');
        $('.new-button').html('NEW').attr('id', 'new');

        $('#delete').css('display', 'none');
        $('.note-details').css('display', 'none');
        $('#newNoteDisplay').css('display', 'none');
        $('.card-container').css('display', 'flex');
    },
    deleteAll: () => {

        $('#delete').css('display', 'none');
        $('.delete-button').css('display', 'none');
        $('.card-container').html('');
        $('.wrapper').css('display', 'none');
        $('.empty-page').css('display', 'flex');
    },
    confirm: () => {
        $('.delete-dialog').attr('id', 'deleteAll');
        $('#delete').css('display', 'none');
        $('#newNoteDisplay').css('display', 'none');
        $('form #title').val('');
        $('form #url').val('');
        $('form #content').val('');

    }
}

$(document).ready(function () {
    if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', JSON.stringify([]));
        $('.note-color > div:first-child').append(tick);

    }
    else {
        $('.note-color > div:first-child').append(tick);
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes.forEach(note => {
            RenderNotes(note);
        });
    }

    // click new button in header
    $('.new-button').click(function () {
        $('#newNoteDisplay').css('display', 'contents');
    });

    // click delete button in header
    $('.delete-button').click(function () {
        RenderDeleteDetails();
        $('#delete').css('display', 'contents');
    });


    const alert = document.createElement('div');
    alert.className = 'alert';

    const Validate = () => {
        if (/^.{1,100}$/.test($('#title').val()) != true) {
            $(alert).html("(Title should not be empty and must be less than 100 words)");
            $('form #title').before(alert);
            return false;
        }
        if (/^[\w\n]{1,}$/.test($('form #content').val()) != true) {
            $(alert).html("(Content should not be empty)");
            $('form #content').before(alert);
            return false;
        }

        $(alert).remove();
        return true;
    }

    // New note section
    $('.note-footer button').click(function (e) {
        e.preventDefault();
        if (Validate()) {
            let note = {};
            let notes = JSON.parse(localStorage.getItem('notes'));
            note.id = notes.length;
            note.title = $('form #title').val();
            note.url = $('form #url').val();
            note.content = $('form #content').val();
            note.bgColor = $('.tick').parent().css('background-color');
            let date = new Date();
            note.date = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
            notes.push(note);
            console.log("b" + notes);
            // notes.push(note);
            console.log(localStorage.setItem('notes', JSON.stringify(notes)));
            $('.delete-button').css('display', 'inline-block')
            $('#newNoteDisplay').css('display', 'none');
            $('form #title').val('');
            $('form #url').val('');
            $('form #content').val('');
            $('.wrapper').css('display', 'inherit');
            $('.empty-page').css('display', 'none');
            RenderNotes(note);
        }
    });


    // select colors
    $('.note-color > div').each(function (index) {
        $(this).css('background-color', colors[index]);
    });

    // add tick
    $('.note-color > div').click(function () {
        $(this).append(tick);
    })

    const RenderDeleteDetails = () => {
        const value = deleteSectionDetails[$('.delete-dialog').attr('id')];

        $('.delete-dialog header h4').html(value.h4);
        $('.delete-dialog h3').html(value.h3);
        $('.delete-dialog button').html(value.button);


        console.log(value);
    }

    // click close to close the new-note
    $('.new-note header span').click(function () {
        if ($('form #title').val() == '') {
            $('#newNoteDisplay').css('display', 'none');
        }
        else {
            $('.delete-dialog').attr('id', 'confirm');
            RenderDeleteDetails();
            $('#delete').css('display', 'contents');
        }

    });

    //note rendering
    function RenderNotes(note) {
        const card = document.createElement('div');
        card.className = 'card';
        $(card).attr('id', note.id);
        $(card).css('background-color', note.bgColor);

        const title = document.createElement('h2');
        title.className = 'note-title';
        $(title).html(note.title);

        const date = document.createElement('div');
        date.className = 'note-date';
        $(date).html(note.date);

        $(card).append(title, date);
        console.log(note.url);
        if (note.url != '') {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'image-card';

            const image = document.createElement('img');
            $(image).attr('src', note.url, 'alt', 'note-image');

            $(imageDiv).append(image);
            $(card).append(imageDiv);
        }

        const content = document.createElement('p');
        content.className = 'note-content';
        $(content).html(note.content);

        $(card).append(content);

        console.log(card);
        $('.card-container').prepend(card);
    };

    //Delete section
    $('.delete-dialog header span').click(function () {
        $('#delete').css('display', 'none');
    });

    $('.delete-dialog button').click(function () {
        console.log($('.delete-dialog').attr('id'));

        deleteElement[$('.delete-dialog').attr('id')]();
    });

    //note-detail
    $('.card').click(function(e) {
        console.log("hi")
        // const index = $(e.target).attr('id');
        $('.card-container').css('display', 'none');
        $('.note-details').css('display', 'flex');
        $('i').css('display', 'block');
        $('.delete-button').html('DELETE').attr('id', 'deleteOne');
        $('.delete-dialog').attr('id', 'deleteOne');
        $('.new-button').html('EDIT').attr('id', 'edit');

    })

    $('i').click(function() {
        $('.card-container').css('display', 'flex');
        $('.note-details').css('display', 'none');
        $('i').css('display', 'none');
        $('.new-button').html('NEW').attr('id', 'new');
        $('.delete-button').html('DELETE ALL').attr('id', 'deleteAll');
    })

});