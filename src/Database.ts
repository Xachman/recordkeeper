

export default class Database {
    private db
    constructor() {
        const dbName = "records"
        this.db = indexedDB.open(dbName, 1); // open database with version 1
        this.db.onsuccess = (event) => {
            //const db = event.target.result;
            console.log(`Database ${dbName} opened successfully.`);
        };
        this.db.onerror = (event) => {
            console.error(`Database ${dbName} failed to open: ${event ?? 'error'}`);
        };
    }

    addRecord(
        hours:number,
        date:Date,
        placements=0,
        videos=0,
        returnVisits=0,
        studies=0,
        notes=""
    ) {

    }

    deleteRecord(id:number) {

    }
}