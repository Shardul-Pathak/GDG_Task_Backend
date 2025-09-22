export default async function addUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password}),
        });
    const res = await response.json();
    if(res.status === "ok") {
        window.location.href = '/home';
    }
    else if(res.status === "not found") {
        alert("User not found");
        window.location.href = '/signup';
    }
    else {
        alert("Error occurred");
        window.location.href = '/signup';
    }
}