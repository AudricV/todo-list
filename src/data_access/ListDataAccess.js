// Interface-like class, so suppress unused vars eslint warning as the parameters passed are not
// used
/* eslint-disable no-unused-vars */
/**
 * Interface to access TODO-list data.
 */
class ListDataAccess {
    /**
     * Get the completed task count, i.e. the numbers of tasks marked as done.
     *
     * @returns {Number} the number of completed tasks, which should be always positive
     */
    getRemainingTasksCount() {
        throw new Error(
            "DataAccess is an interface and this method must be implemented in subclasses");
    }

    /**
     * Get the number of tasks added in the application.
     *
     * @returns {Number} the number of tasks, which should be always positive
     */
    getTasksCount() {
        throw new Error(
            "DataAccess is an interface and this method must be implemented in subclasses");
    }
}

export default ListDataAccess;
