export interface AuthStateType {
	accessToken: string;
}

export interface AuthActionsType {
	setAccessToken(val: string): void;
	reset(): void;
}

export interface UseAuthType extends AuthStateType, AuthActionsType {
	authenticated: boolean;
	setAccessToken(val: string): void;
}
