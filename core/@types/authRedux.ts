export interface AuthStateType {
	accessToken: string;
}

export interface AuthActionsType {
	setAccessToken(val: any): void;
	reset(): void;
}

export interface UseAuthType extends AuthStateType, AuthActionsType {
	authenticated: boolean;
}

