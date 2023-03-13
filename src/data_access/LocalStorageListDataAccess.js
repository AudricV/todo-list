import ListDataAccess from "./ListDataAccess";

/**
 * An implementation of {@link ListDataAccess} using the LocalStorage API.
 */
class LocalStorageListDataAccess extends ListDataAccess {
    constructor() {
        super();
        this.tasksList = LocalStorageListDataAccess.getTasksFromLocalStorage();
    }

    /**
     * Get the tasks from the local storage as a JSON array.
     *
     * @returns the tasks from the local storage as a JSON array, or an empty array if no task
     * exists
     */
    static getTasksFromLocalStorage() {
        const tasksLocalStorage = localStorage.getItem("tasks");
        if (tasksLocalStorage) {
            return JSON.parse(tasksLocalStorage);
        }

        return [];
    }

    getRemainingTasksCount() {
        return this.tasksList.filter(task => !task.isChecked).length;
    }

    getTasksCount() {
        return this.tasksList.length;
    }
}

export default LocalStorageListDataAccess;
