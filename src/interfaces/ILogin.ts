export interface UsuarioLogin {
    email: string;
    senha: string;
}

export interface LoginProps {
    usuario: UsuarioLogin;
    erro: boolean;
    signIn: (email: string, senha: string) => void;
}