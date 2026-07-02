export const getToken = ()=>{
    const auth = localStorage.getItem('auth');
    if(!auth) return null;

    const {token , expiresAt } = JSON.parse(auth);
    if (Date.now() > expiresAt) {
    localStorage.removeItem("auth");
    return null;
    }

    return token;
}