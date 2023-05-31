import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

export const UserProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");
  const location = useLocation();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const res = await api.get("users/getProfile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(res.data);
          navigate("/dashboard");
        } catch (error) {
          console.log("Erro");
        }
      }
    })();
  }, [location.pathname]);

  const userRegister = async (formData) => {
    try {
      const res = await api.post("users/create", formData);
      toast.success("Cadastro feito com sucesso!");
      setLoading(true);
      navigate("/");
      return res;
    } catch (error) {
      toast.error("Campos incorretos");
    } finally {
      setLoading(false);
    }
  };
  const submitRegister = (data) => {
    userRegister(data);
  };

  const userLogin = async (formData, setLoading) => {
    try {
      const res = await api.post("login", formData);
      setUser(res.data);
      setLoading(true);
      navigate("/dashboard");
      toast.success("Você está logado!");
      localStorage.clear();
      localStorage.setItem("@TOKEN", res.data.token);
    } catch (error) {
      toast.error("Email ou Senha incorretos");
    } finally {
      setLoading(false);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
  };

  const deleteUser = async () => {
    try {
      await api.delete("users/delete-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      removeToken();
      toast.success("Sua conta foi deletada com sucesso");
      navigate("/register");
    } catch (error) {
      console.log("erro");
    }
  };

  const submitLogin = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        submitRegister,
        userLogin,
        submitLogin,
        loading,
        user,
        setUser,
        token,
        removeToken,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
