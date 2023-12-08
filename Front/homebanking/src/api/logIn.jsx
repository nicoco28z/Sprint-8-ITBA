export default function login(user, psw){
  
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:8000/api/login/`

  useEffect(() => {
    const isLogued = async () => {
      try {
        const response = await fetch(url, {body:{username:user, password:psw}});
        if (!response.ok) {
          throw new Error('Error al iniciar sesion');
        }
        const jsonusuario = await response.json();
        setUsuario(jsonusuario);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    isLogued();
  }, []);

  return { usuario, isLoading, error};
};