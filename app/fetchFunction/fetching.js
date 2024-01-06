export async function fetchUser(email){
    const res=await fetch(`${webUrl}/api/users/${email}`)
    return await res.json()
}
export const webUrl='https://merry-narwhal-231aae.netlify.app/'