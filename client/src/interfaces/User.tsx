export default interface User {
    id:string,
    username:string,
    first_name:string|undefined,
    last_name:string|undefined,
    password:string,
    email:string|undefined,
    location:string|undefined,
    bio:string|undefined,
    created_at:string;
}