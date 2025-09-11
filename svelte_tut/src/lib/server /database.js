const db = new Map();

export function getTodos(userid){
    if (!db.get(userid)){
        db.set(userid,[{
            id:crypto.randomUUID(),
            description:'Learn svelte kit',
            done:false
        }]);
    }

    return db.get(userid);

}
