// Exercise 7
const Travel = {

    /* 5a. Attempts to define the user's current location. The
     * parameter must be a non-empty string. Returns true if successful. */
    setOrigin(origin) {
        if( origin === '' )
            return false;
        this.origin = origin;
        return true;
    },

    /* 5b. Attempts to book a trip (buy a ticket) to the destination.
     * The parameter must be a non-empty string that is not equal
     * to the origin position. Returns true if successful.
     */
    bookTrip(destination) {},

    /* 5c. Attempts to travel from an origin to a destination.
     * Requires both origin and destination to be set. Should
     * throw an Error if either origin or destination has not
     * been set. Returns false if origin and destination have been
     * set, but have incorrect values; otherwise returns true.
     */
    goOnTrip() {},

    /* 5d. Returns the current position of the user. Before a trip
     * has been made, the position is equal to origin. After a
     * trip it is equal to destination. May throw an exception.
     */
    getPosition() {
        return this.origin;
    }
}

module.exports = Travel;
