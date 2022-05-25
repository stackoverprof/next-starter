export interface AuthStateType {
	authenticated: boolean;
	access_token: string;
}

export interface AuthActionsType {
	setToken(val: any): void;
	removeToken(val: any): void;
}

export interface UseAuthType extends AuthStateType, AuthActionsType {}
