import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../views/Dashboard";
import Detail from "../../views/Detail";
import Login from "../../Login";
import Header from "../header";
import Register from "../../Register";
import AdManagement from "../../AdManagement";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function Layout({ user }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setLoading(false);
    });
    return () => unsubscriber();
  }, []);

  if (loading) return <div>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX////q6urLy8vc3NympqaQkJBpaWm3t7d/f39WVlYzMzMoKChFRUXw8PD4+Pj7+/vExMQ8PDxzc3MAAACenp7i4uKKiorR0dFcXFxPT09iYmJKSkqvr68eHh4ZGRkuLi4NDQ3MICP8AAAITklEQVR4nO2c14LrNgxE1atJ9Wq5/P9XRrZVCBGkGp29D563JBv5LAANwOLVtJ9+6qUX0V8jLBQZXpqmuf7XHKxInnpvxX9NwsgemDzH/GuUScXI5Hn5X7NMcr1ZxV/DjMpnpvSfyZ/1g5oVmYZhkONQkem6seJ6I5ZdlmXe4VjrUMRz6rp1bKqQybRL+6USf+oqlO60zku1Jwr2flF7VNkdgaLph6mnspRBmfZMhX3oGlReO6NSZQk0ypkKs+wVqMKZ1SjLHwtVVruhynaG8pVBxQyUnfOPlUMV9VcixdRUHyp+PJFC0dRhpQyK2ICKe64UKmaS57QKp4iKzZ/NvdYyKFJ/J1B9CnIQquUHy6AsNlA1anNHVYAE2tuhTJA8T2Wb6T9XFioJlAegFI/wsNZtWBpiKAMwLSN8WsCrSncbVOSxRV4rH5UjaAvg+UIo91t2MEpiCyIonWVSagejImALNtsCRVA2sAN3+UQVMmEC16GMb9rBqA7UOvN6C6BSEKgvregJTOC8m4FDuWyDaUvsiSpkCGwBhSJgOmhPLr2oOPmwBU62gEKBptcKZ3NKyOq+FoljK49FKzzTQ20BgyL+Fjsw8vTie658X6uwcqtXblUofgRb4GgLGFS+ocp1u7k2vt9cfRkVtUblHdoTdOCgYy9DoKr1KqfW9ep/1MiM1bAYudgPulitI1BgOqiRxQat2saf1CA/MYh0FlDMlzwFkRqmBX4rCNoBMh1UzsVndBUvUnVroa7isDBbiOedvPJdHQRMBw5XMXraNCyT36TbofrS4vwF2sIbmi63F2GgljMw7WqI9CoqIVTUcVR8aYFpYXgB3ZEq/fwz8CgHRjsyOKQ+fZJuXeUIVb6wB7YFjqUeOx+m4dVnoRZ2UJQJh9RLZvguAtWXlsli6dgi3rT6fzttXzFQbcn+v8Rq+DD1gZIOytTFYmXlLutajC0I5hGmpmomBrRrrwiSn3grnSZGY9WX1vzx8yoQWcJ/AjLZFDsDVzhS4xtypF66IFjdXFpkCFWJbHZ8VIxbdzMTsa9Y5prE2nSiU3QoltVN51Ske2+BWuJ5ovDatm6diYl0Pop03XwaQA0Uqi+t6Zcy4ziWLgSo4bpzJcbQwEdd2njHeRwRlFYu7lESFSmauWstCTUqE89hfmBN4qKZ8y/2gWm0wive3XsAagboO+ccCno/XeAGv/MpHhKnayOvSJkI5vA7E1jUfJT8vcUEFA3zMQjVvvzxUEl6eqfDXGKdhDpaTFAkhlQ702cCqDPFBKWD0tobe6bQm1rlORaTw27vY2dLSFQfUQ5mmu9m6ntMfWl6+amKYoKiVd/MXPPI3ZHivQbb0+Z++ulbokSu02VKdVOqgnuviRG7csXGudtRbuonUl3THGLF3QrSS90JnyH1I7msKEkydnVUbUB6UR3v7s4q0lvBbPlkG1OfwqOFFYebmC7JvNFhboVyj4bKCrZBXcJphtiYvRNQ9UamSzh9wj8JtT19R13hQPq+X+hFto2JKfTNlnDcPvNtoWIsQYvW7PzDdGZIs8N1p0oyOP/rRrymk3Oj68FzUl6tza0p6JrOMfVa6fjkC8e5P/20V7So4n7QO2KfppdlWeOqP24vjI/4I6RVxcEtCILHXXJ+dkikio2RavdOXvYI3npkKtfI1DQY7e01ThiMCgPeH48ixSyTsfO3NZOA0e2h5LKZbiy08yoGhOpL6+wVhVcxLZmM9ZMUGVSfwzt613ezYDEN2vlEDuqVw51blCxSgSCdKvRJ9+TgfRwsc/vrvA/V7cFTPULsXsCa9CpWw9QP6A8kVkH43FtaaDG9dGg5Y7ZYsIJbYu0pLc4GPorNqce89mikDYe6dptPoejenQYprc2uJSgmo5pKnBbvzRtJd46b5/P+DKcdar28YTl8hNtci6xnLpq2lIRM2S18Kasn7sLLsByGd3v9dRYhzZnTomLa6BI8rwjCQXePIU3Q0gqTFTsm+DsXV2wfZXfk8Md0zxEqfLKvax5gOQwy8aWSlwRhggFh9wTH+EWErXx7hrrV7PtQpKg9sPHkVKBxWmxGgq3LoWSo/lHEQYUZvIVUOU/MSyUZxF47c/HmU5OP1Mik6zxUGMAH0PjKl9ZdfH+KclCwmD7RBDu6Q/AmfX7cZaGey4ssJOdcK6yFUITPHOdEBARKXwRqgNIvISvOOciytB6NECqq1pBmi2JLisxQQ1XlGRsq5BqZ2YLSCiUXZsGssiwmJFBDbnkorbkxVHdkTqFWwuZQ0ufnUMUV6oswUGNaECiDhbpd0N8vv41Yd/GVPG1ue5WggcCTjPGjECjNuzNUGX5pq/Bu4ePVaXz5YrJvIbGBHJN8BO1giiUGVbFVFT4EK6u4DLLMsdbXXVTc+4EdzIekGJTmsbZwF95vO30UpeOBwqGKBITqW1+aRu1ACAVt4S7vuccFA8XUAQ6lJWu2oECLQDH/RQBlsPm7qfu6ISvcDiRQWgpsQek31gZBOwB1K4IqWKgw+MLfnRBVuQRKy6XTwnlh08EqFLSFTPWX8RdND/qdEEpzv2oLQjuQQ0UX1haeamtdUuVSKM18sLYQKLUF2PSW7VoCtbAFlV/xI9JASaF0OC0obIEwUDyzBEqz2VA9ZQu8fRKMUdugKLQFdV8jl9jBKhS0hUyZrQM/QIZSOZTm3L8dKew3XYGqvpI+Kg/UGpSWPr8Apa1sSK1B0WD09afCb2lOocJtZg2qr/UP1fOi0tKHzTvBq7MKpbn+PXtmobq/VfIRJbpwO3gd6nUrOj/2BYmj2gD1/+sHtVXcptk/oX8Sas7fX5OwIv9aRb1FX1jf+YsIP/10Xv8Bof7aMU7k+5QAAAAASUVORK5CYII="/>
  </div>;

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adManagement" element={<AdManagement />} />
        <Route path="/detail/:uid" element={<Detail />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

function AppRouter() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscriber();
  }, []);

  return (
    <Router>
      <Layout user={user} />
    </Router>
  );
}

export default AppRouter;
