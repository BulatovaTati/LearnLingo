export const formatFirebaseError = msg => {
    if (msg.includes('auth/invalid-email')) return 'Invalid email format.';
    if (msg.includes('auth/user-not-found')) return 'No user found with this email.';
    if (msg.includes('auth/wrong-password')) return 'Incorrect password.';
    if (msg.includes('auth/invalid-credential')) return 'Invalid email or password.';
    if (msg.includes('auth/email-already-in-use')) return 'This email is already registered.';
    if (msg.includes('auth/network-request-failed')) return 'Network error. Check your connection.';
    return 'Something went wrong. Please try again.';
};
