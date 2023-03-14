import { yearCalendarClasses } from "@mui/x-date-pickers";


export default class Database {
    private dbName = "records"
    constructor() {
        const dbName = this.dbName
        const openDbRequest = window.indexedDB.open(dbName, 1); // open database with version 1
        openDbRequest.onsuccess = (event) => {
            //const db = event.target.result;
            console.log(`Database ${dbName} opened successfully.`);
        };
        openDbRequest.onerror = (event) => {
            console.error(`Database ${dbName} failed to open: ${event ?? 'error'}`);
        };
        openDbRequest.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = event.target.result;
            const store = db.createObjectStore("recordStore", { autoIncrement: true });
            store.createIndex("year", "year", { unique: false });
            store.createIndex("month", "month", { unique: false });
            store.createIndex("day", "day", { unique: false });
            store.createIndex("hours", "hours", { unique: false });
            store.createIndex("placements", "placements", { unique: false });
            store.createIndex("videos", "videos", { unique: false });
            store.createIndex("studies", "studies", { unique: false });
            store.createIndex("returnVisits", "returnVisits", { unique: false });
            store.createIndex("notes", "notes", { unique: false });
            console.log(`Object store "recordStore" created successfully.`);
        };
    }

    addRecord(
        hours:number,
        year:number,
        month:number,
        day: number,
        placements=0,
        videos=0,
        returnVisits=0,
        studies=0,
        notes=""
    ) {
        const dbName = this.dbName
        const openDbRequest = indexedDB.open(dbName, 1); // open database with version 1
        openDbRequest.onsuccess = (event) => {
            const db = event.target.result;
            console.log(`Database ${dbName} opened successfully.`);
            const transaction = db.transaction(["recordStore"], "readwrite");
            // report on the success of the transaction completing, when everything is done
            transaction.oncomplete = () => {
                console.log("Transaction completed.");
            };

            transaction.onerror = () => {
                console.log("Transaction not opened due to error.");
            };

              // create an object store on the transaction
            const objectStore = transaction.objectStore("recordStore");

            // Make a request to add our newItem object to the object store
            const objectStoreRequest = objectStore.add({
                hours: +hours,
                year: +year,
                month: +month,
                day: +day,
                placements: +placements,
                videos: +videos,
                returnVisits: +returnVisits,
                sudies: +studies,
                notes: notes
            })


            objectStoreRequest.onsuccess = () => {
                // report the success of our request
                console.log("Request successful.");
            };

            transaction        };
        openDbRequest.onerror = (event) => {
            console.error(`Database ${dbName} failed to open: ${event ?? 'error'}`);
        };
    }

    deleteRecord(id:number) {

    }

    listRecords() {
        
    }
}