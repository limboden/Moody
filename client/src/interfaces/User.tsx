export default interface User {
    id:string,
    username:string,
    first_name:string|null,
    last_name:string|null,
    password:string,
    email:string|null,
    location:string|null,
    bio:string|null,
    created_at:string;
}