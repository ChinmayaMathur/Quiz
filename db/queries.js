const knex = require("./client"); //establish the connection with our db

module.exports = {
    index() {
        return knex.select().table('clucks');
    },

    create(cluck) {
        console.log("new cluck object: ", cluck);
        return knex("clucks").insert(cluck, "*");
    },

    show(id) {
        return knex("clucks").where("id", id).first();
    },
    
    delete(id) {
        return knex("clucks").where("id", id).del();
    },
}