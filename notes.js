const readline = require('readline');

let notesDB = {}

function uploadNote() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Course name:', (course) => {
        rl.question('Note title:', (title) => {
            rl.question('Note contents:', (content) => {
                if (!notesDb[course]) {
                    notesDb[course] = [];
                }

                notesDb[course].push({title, content});

                console.log('\nNote titled' + title + ' uploaded to course ' + course);
                rl.close();
                mainMenu();

            });
        });
    });
}


function displayNotes() {
    if (Object,keys(notesDb).length === 0) {
        console.log('\nNo notes have been uploaded yet.\n');
    } else {
        console.log('\nUploaded Notes:');
        for (const [course, notes] of Object.entries(notesDb)) {
            console.log('\nCourse:' + course);
            notes.forEach((note, index) => {
                console.log(`${index + 1}. Title: ${note.title}`);
                console.log(`Content: ${note.content}`);
            });
        }
        console.log();
    }
    mainMenu();
}

function mainMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log('1. Upload a Note');
    console.log('2. Display Notes');
    console.log('3. Exit');
    rl.question('Enter your choice:', (choice) => {
        rl.close();
        if (choice === '1') {
            uploadNote();
        } else if (choice === '2') {
            displayNotes();
        } else if (choice === '3') {
            console.log('Exiting.');
        } else {
            console.log('Invalid option. Please try again.\n');
            mainMenu();
        }
    });
}

mainMenu();