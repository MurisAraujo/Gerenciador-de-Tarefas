export const isAuthenticated = localStorage.getItem('Authorization') !== null;
export const getToken = () => localStorage.getItem('Authorization');

export const login = token => {
    localStorage.setItem('Authorization', token);
};
export const logout = () => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('permission');
    localStorage.removeItem('name');
};