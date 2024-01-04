export async function fetchUser(email){
    const res=await fetch(`${webUrl}/api/users/${email}`)
    return await res.json()
}
export const webUrl='http://localhost:3000'