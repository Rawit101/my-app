'use server'

import { createEmail } from "./action"

export default function Page() {
   
    return (
        <div>
            <form action={createEmail}>
                <input type="email" name="email" />
                <button>Submit</button>
            </form>
        </div>
    );
}