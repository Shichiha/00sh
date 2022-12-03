import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY, SUPABASE_URL } from './config';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export const getUser = () => supabase.auth.getUser();

type User = { email: string, password: string }
export const signUp = async ({ email, password }: User) => {
	const { error, data } = await supabase.auth.signUp({ email, password });
	return { data: !error, error };
}

export const signIn = async ({ email, password }: User) => {
	const { error, data } = await supabase.auth.signInWithPassword({ email, password });
	return { data: !error, error };
}

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	return { data: !error, error };
}

export const sendPasswordResetEmail = async (email: string) => {
	const { error } = await supabase.auth.resetPasswordForEmail(email);
	return { data: !error, error };
}

supabase.auth.onAuthStateChange((event, session) => {
	console.log('auth state changed', event, session);
});

export const getBlogPosts = async () => {
	const { data, error } = await supabase.from('blog_posts').select('*');
	return { data, error };
}