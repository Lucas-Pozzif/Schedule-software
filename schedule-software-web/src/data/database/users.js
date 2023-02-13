import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../data management/database-management';

export class User {
    constructor(
        id,
        name,
        number
    ) {
        this.userId = id;
        this.userName = name;
        this.userNumber = number;
    }
    //Methods

    async upload() {
        try {
            await setDoc(doc(db, "users", this.id), {
                name: this.userName,
                number: this.userNumber
            })
        } catch (e) {
            console.error("error uploading the user: ", e)
        }
    }

    async download() {
        const user = await getDoc(doc(db, "users", this.id))
        if (user.exists()) {
            const userData = user.data()

            this.name = userData.name;
            this.number = userData.number
            return true
        } else {
            return false
        }
    }

    //Getters
    get id() {
        return this.userId;
    }
    get name() {

        return this.userName;
    }
    get number() {
        return this.userNumber;
    }

    //Setters
    set name(name) {
        this.userName = name
    }
    set number(number) {
        this.userNumber = number
    }

}