const colors = ['#EBCCED', '#FCFCFC', '#FFCA71', '#E5EE91', '#FFA78C'];
const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

const tick = document.createElement('div');
tick.className = 'tick';
let counter = 0;

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

$(document).ready(function () {
    if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', JSON.stringify([]));
        $('.note-color > div:first-child').append(tick);
    }
    else {
        $('.note-color > div:first-child').append(tick);
        let notes = JSON.parse(localStorage.getItem('notes'));
        for(var index= 0; index < (notes.length > 10? 10: notes.length); index++) {
            counter += 1;
            RenderNotes(notes[index], false);
        }
        $('.load-more').css('display', counter < notes.length? 'flex' : 'none')
    }

    const alert = document.createElement('div');
    alert.className = 'alert';

    const Validate = () => {
        if (/^.{1,100}$/.test($('#title').val()) != true) {
            $(alert).html("(Title should not be empty and must be less than 100 words)");
            $('form #title').before(alert);
            return false;
        }
        if ($('form #content').val().length < 1) {
            $(alert).html("(Content should not be empty)");
            $('form #content').before(alert);
            return false;
        }

        $(alert).remove();
        return true;
    }


    //note rendering
    function RenderNotes(note, value) {
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
        value
            ? $('.card-container').prepend(card)
            : $('.card-container').append(card)
        
    };

    const DisplayEmptyPage = (value) =>
        $('.empty-page').css('display', value ? 'flex' : 'none');
        counter = 0;

    const DisplayWrapperPage = (value) =>
        $('.wrapper').css('display', value ? 'block' : 'none');

    const DisplayNewNotePage = (value) =>
        $('#newNoteDisplay').css('display', value ? 'contents' : 'none');

    const DisplayLoadMore = () => {
        $('.load-more').css('display', value? 'flex': 'none');

    }
    const RemoveInputValues = (value) => {
        $('form #title').val('');
        $('form #url').val('');
        $('form #content').val('');
    }

    const DisplayDeletePage = (value) => {
        $('#delete').css('display', value ? 'flex' : 'none');
    }

    const DisplayDeleteButton = (value) => {
        $('.delete-button').css('display', value ? 'block' : 'none');
    }

    const DisplayBackIcon = (value) => {
        $('i').css('display', value ? 'block' : 'none');
    }
    const addInputNotes = () => {
        let note = {};
        note.id = Date.now();
        note.title = $('form #title').val();
        note.url = $('form #url').val();
        note.content = $('form #content').val();
        note.bgColor = $('.tick').parent().css('background-color');
        let date = new Date();
        note.date = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

        return note;
    }

    const RenderDeleteDetails = (index) => {
        const value = deleteSectionDetails[index];
        $('.delete-dialog header h4').html(value.h4);
        $('.delete-dialog h3').html(value.h3);
        $('.delete-dialog button').html(value.button);
    }

    const AddDeleteId = (value) => {
        $('.delete-dialog button').attr('id', value);
    }
    const Togglewrapper = (value) => {
        $('.card-container').css('display', value ? 'none' : 'flex');
        $('.note-details').css('display', value ? 'flex' : 'none');
    }

    const deleteAction = {
        deleteOneId: () => {
            DisplayDeletePage(false);
            Togglewrapper(false);
            DisplayBackIcon(false);
            $('.new-button').html('NEW').attr('id', 'new');
            $('.delete-button').html('DELETE ALL').attr('id', 'deleteAll');
        },
        deleteAllId: () => {
            // localStorage.setItem('notes', JSON.stringify([]));
            $('.card-container').html('');
            DisplayEmptyPage(true);
            DisplayWrapperPage(false);
            DisplayDeleteButton(false);
            DisplayDeletePage(false);
        },

        confirmId: () => {
            DisplayDeletePage(false);
            DisplayNewNotePage(false);
            RemoveInputValues();
        }
    }
    // click new button in header
    $('.new-button').click(function () {
        DisplayNewNotePage(true);
        // if ($(this).attr('id') == 'edit') {
        //     let currentTarget = JSON.parse(localStorage.getItem('notes'))[$('.note-details').attr('id')];
        //     $('form #title').val(currentTarget.title);
        //     $('form #url').val(currentTarget.url);
        //     $('form #content').val(currentTarget.content);
        //     $('.note-footer button').html('SAVE').attr('id', 'save');
        // }
    });

    // Add or save button
    $('.note-footer button').click(function (e) {
        e.preventDefault();
        if (Validate()) {
            let note = addInputNotes();
            let notes = JSON.parse(localStorage.getItem('notes'));
            notes.unshift(note);
            // if ($('.note-footer button').attr('id') == 'save') {
            //     let index = $('.note-details').attr('id');
            //     let currentTarget = notes[index];
            //     notes = notes.splice(index, 1);
            // }
            localStorage.setItem('notes', JSON.stringify(notes));
            DisplayNewNotePage(false);
            DisplayWrapperPage(true);
            DisplayEmptyPage(false);
            DisplayDeleteButton(true);
            RemoveInputValues();
            // Togglewrapper(false);
            RenderNotes(note, true);
        }
    });

    // click delete button in header
    $('.delete-button').click(function () {
        if ($(this).attr('id') == 'deleteAll') {
            RenderDeleteDetails('deleteAll');
            AddDeleteId('deleteAllId');
            DisplayDeletePage(true);
        }
        else if ($(this).attr('id') == 'deleteOne') {
            RenderDeleteDetails('deleteOne');
            AddDeleteId('deleteOneId');
            DisplayDeletePage(true);
        }
    });

    $('.delete-dialog button').click(function () {
        deleteAction[$(this).attr('id')]();
    });

    //note-detail
    $('.card-container').on('click', '.card', function () {

        Togglewrapper(true);
        DisplayBackIcon(true);
        $('.delete-button').html('DELETE').attr('id', 'deleteOne');;
        $('.new-button').html('EDIT').attr('id', 'edit');
    })

    // select colors
    $('.note-color > div').each(function (index) {
        $(this).css('background-color', colors[index]);
    });

    // add tick
    $('.note-color > div').click(function () {
        $(this).append(tick);
    })

    // click close to close the new-note
    $('.new-note header span').click(function () {
        if ($('form #title').val() == '' && $('form #content').val() == '') {
            DisplayNewNotePage(false);
        }
        else {
            RenderDeleteDetails('confirm');
            AddDeleteId('confirmId');
            DisplayDeletePage(true);
        }
    });


    //Delete section
    $('.delete-dialog header span').click(function () {
        DisplayDeletePage(false);
    });

    $('i').click(function () {
        Togglewrapper(false);
        DisplayBackIcon(false);
        $('.new-button').html('NEW').attr('id', 'new');
        $('.delete-button').html('DELETE ALL').attr('id', 'deleteAll');
    });

    $('.load-more button').click(function() {
        const notes = JSON.parse(localStorage.getItem('notes'));
        let conditionResult = notes.length > (counter+10)? counter+10: notes.length;

        for(index = counter; index < conditionResult; index++) {
            counter += 1;
            console.log(index)
            RenderNotes(notes[index], false);
        };

        value = counter >= notes.length ? false: true
        DisplayLoadMore(value);
    });
});