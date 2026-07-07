# React


### Storing user & token 

--set
    localStorage.setItem("user", data.user);
    localStorage.setItem("token", data.token);

--get
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
        setUser(user);
        }
    }, []);