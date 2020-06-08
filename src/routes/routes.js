import {
    addnewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact,
    getContactByEmail
} from '../controllers/controller';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // Post endpoint
        .post(addnewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)

        // updating a specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact);

    app.route('/contact/email/:email')
        // get a specific contact by email
        .get(getContactByEmail)
}

export default routes;
