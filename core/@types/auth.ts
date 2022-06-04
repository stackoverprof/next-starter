export interface AuthStoreType {
	accessToken: string;
}

export interface AuthActionsType {
	setAccessToken(val: string): void;
	reset(): void;
}

export interface UseAuthStoreType extends AuthStoreType, AuthActionsType {
	authenticated: boolean;
	setAccessToken(val: string): void;
}
